class Chess {
    constructor (sourse) {
        this.sourse = sourse;
        this.names = [],
        this.blackS = [],
        this.blackJ = [],
        this.whiteJ = [],
        this.whiteS = [],
        this._render();
    }
    _render() {
        // создаем поле
        let $field = $('<div/>', {
            class: 'field'
        });
        $field.appendTo('body');

        // координаты клетки
        let x=1;
        let y=10;

        // создаем клетки
        for (let i=1; i<=100; i++) {
            let $cell = $('<div/>', {
                class: 'cell',
                posY: y,
                posX: x
            });

            // раскрашиваем доску
            if ((y%2!==0 && x%2===0) || (y%2===0 && x%2!==0)) {
                $($cell).addClass('cellLigth')
            } else {
                $($cell).addClass('cellDark')
            }
            if ((y===10 || y===1) || (x===1 || x===10))  {
                $($cell).addClass('cellWhite')
            };

            x++;
            if (x===11) {
                y--;
                x=1;
            }

            $cell.appendTo($field);                  
        }
        this._init(); 
    }
    
}