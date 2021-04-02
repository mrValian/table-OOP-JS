class GridView {
    constructor() {
        /**
         *  properties
         *  @param [array] _tableClass - css классы оформления
         *  @param [array] data  - выходные данные
         *  @param [array] attribute - управляем что выводим 
         *  @param [array] _element  - куда выводить таблицу
         *  @param [array] _header  - заголовок таблицы
         *  @param [array] _headerClass  - css классы заголовка
         */
        this._element = "";
        this._headerClass = [];
        this._tableClass = [];
        this.data = [];
        this.attribute = [];
        this._header = "";
    }

    /**
     * method set header for table
     */
    set header(header) {
        if (typeof header === "string" && header.trim() != "") {
            this._header = header.trim();
            return true;
        }
        return false;
    }

    /**
     * method set headerClass for header
     */
    set headerClass(headerClass) {
        if (typeof headerClass === "object") {
            this._headerClass = headerClass;
            return true;
        }
        return false;
    }

    /**
     * method set element for render
     */
    set element(element) {
        if (document.querySelector(element)) {
            this._element = element;
            return true;
        }
        return false;
    }

    /**
     * method set tableClass for table
     */
    set tableClass(tableClass) {
        if (typeof tableClass === "object") {
            this._tableClass = tableClass;
            return true;
        }
        return false;
    }

    /**
     * render method for show table
     */
    render() {
        // show header
        if (this._header) {
            let header = document.createElement("h1");
            header.textContent = this._header;
            this._headerClass.forEach((cssClass) => {
                header.classList.add(cssClass);
            });
            document.querySelector(this._element).append(header);
        }
        // show table
        let table = document.createElement("table");
        this._tableClass.forEach((cssClass) => {
            table.classList.add(cssClass);
        });
        // create table header
        let trHeader = document.createElement("tr");
        for (let key in this.attribute) {
            let th = document.createElement("th");
            if (this.attribute[key].label) {
                th.textContent = this.attribute[key].label;
            } else {
                th.textContent = key;
            }
            trHeader.append(th);
        }
        table.append(trHeader);
        // draw table
        for (let i = 0; i < this.data.length; i++) {
            let tr = document.createElement("tr");
            let dataArr = this.data[i];
            for (let key in this.attribute) {
                let td = document.createElement("td");
                let value = dataArr[key];
                // check function into value
                if (this.attribute[key].value) {
                    value = this.attribute[key].value(dataArr);
                }
                // check src
                if (this.attribute[key].src) {
                    td.innerHTML = value;
                } else {
                    td.textContent = value;
                }
                tr.append(td);
            }
            table.append(tr);
        }
        document.querySelector(this._element).append(table);
    }
}
