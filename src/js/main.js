'use strict';

const menuItem = document.querySelectorAll('li'),
      section = document.querySelectorAll('.section');
      

      menuItem.forEach((item,i) => {
        item.addEventListener('click', () => {
            section.forEach(sect => {
                sect.style.display = 'none';
                section[i].style.display = 'flex';
            });
        });
      });



