'use strict';

const menuItem = document.querySelectorAll('li'),
      section = document.querySelectorAll('.section'),
      description = document.querySelectorAll('.menu__nav-items-descr'),
      icon = document.querySelectorAll('svg path');

      description[0].style.opacity = '1';
      icon[0].style.fillOpacity = '1';

      menuItem.forEach((item,i) => {
        item.addEventListener('click', () => {
            section.forEach(sect => {
                sect.style.display = 'none';
                section[i].style.display = 'flex';
            });
            description.forEach(descr => {
                descr.style.opacity = '0.6';
                description[i].style.opacity = '1';
            });
            icon.forEach(element => {
                element.style.fill = '';
                icon[i].style.fill = '#fff';
                element.style.fillOpacity = '0.65';
                icon[i].style.fillOpacity = '1';
            });
        });
      });


console.log(icon);

//kitchenn

const block = document.querySelectorAll('.kitchen__content-side-item'),
      descri = document.querySelectorAll('.photo__descr'),
      icons = document.querySelectorAll('.photo');

      block.forEach((item, i) => {
         item.addEventListener('click', () => {
            block.forEach(bl  => {
                bl.style.width = '150px';
                block[i].style.width = '180px';
                bl.style.height = '123px';
                block[i].style.height = '130px';
                bl.style.boxShadow = "0px 4px 35px rgba(0, 0, 0, 0.14)";
                block[i].style.boxShadow = "0px 3px 35px 27px rgba(238, 119, 127, 0.36)";
            });
            descri.forEach(text => {
                text.style.color = "#A3A3A3";
                descri[i].style.color = "#EE777F";
                text.style.fontSize = "15px";
                descri[i].style.fontSize = "20px";
            });
            icons.forEach(ic => {
                ic.style.fill = 'A3A3A3';
                icons[i].style.fill = "EE777F";
            });
        });
      });

//дата 

/* function zeroFirstFormat(value) {
        if (value < 10)
        {
            value='0'+value;
        }
        return value;
    }

function dateTime() {
    const block = document.querySelectorAll('.current_date_time_block');
    const now = new Date();
    const hours = zeroFirstFormat('block.getHours()');
    const minutes = zeroFirstFormat('block.getMinutes()');

    return hours+":"+minutes;
} 

setInterval(function () {
    document.getElementById('current_date_time_block').innerHTML = dateTime();
}, 1000);

   const doc = document.getElementById('current_date_time_block').innerHTML = dateTime(); */