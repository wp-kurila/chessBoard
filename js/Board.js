class Board {
    constructor (sourse) {
        this.sourse = sourse;
        this.names = [],
        this.blackS = [],
        this.blackJ = [],
        this.whiteJ = [],
        this.whiteS = [],
        this._init();
    }
    _init() {
        fetch(this.sourse)
            .then(result => result.json())
            .then(data => {                
                    this.names.push(data.names);
                    this.blackS.push(data.blackS);
                    this.blackJ.push(data.blackJ);
                    this.whiteJ.push(data.whiteJ);
                    this.whiteS.push(data.whiteS);
                    this._render();                
            })
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

            // раскрашиваем клетку
            if ((y%2!==0 && x%2===0) || (y%2===0 && x%2!==0)) {
                $($cell).addClass('cellLigth')
            } else {
                $($cell).addClass('cellDark')
            }
            if ((y===10 || y===1) || (x===1 || x===10))  {
                $($cell).removeClass('cellLigth')
                        .removeClass('cellDark')
                        .addClass('cellWhite')
            };

            // разворачиваем клетки соперника
            if ( (y===10) || (y===9 && x!==1) || (y===8 && x!==1) || (x===10)) {
                $($cell).addClass('cellConvers')
            }

            // заполняем клетку 
            switch (y) {
                case 10: $($cell).html(this.names[0][x-1]);
                    break;
                case 9: $($cell).html(this.blackS[0][x-1]);
                    break;
                case 8: $($cell).html(this.blackJ[0][x-1]);
                    break;
                case 3: $($cell).html(this.whiteJ[0][x-1]);
                    break;
                case 2: $($cell).html(this.whiteS[0][x-1]);
                    break;
                case 1: $($cell).html(this.names[0][x-1]);
                    break;
                default: if(x===1 || x===10) {
                    $($cell).text(y-1);
                }
            }

            // Добавляем курсор на фигуры
            $('.cellDark:parent, .cellLigth:parent').addClass('cellText');

            x++;
            if (x===11) {
                y--;
                x=1;
            }            

            $cell.appendTo($field);                  
        }               
    }    
}