// class dropdowntab1
// {
//     dropdown(dropdownpaths)
//     {
//         if (dropdownpaths&& Array.isArray(dropdownpaths)) {
            
//         dropdownpaths.forEach((dropdownpath) => {
//             cy.get(dropdownpath).click();
//         })}
//     }
// }

// export default dropdowntab1

class dropdowntab1 {
    dropdown(dropdownpaths) {
      if (dropdownpaths && Array.isArray(dropdownpaths)) {
        dropdownpaths.forEach((dropdownpath) => {
          const max = 5; // กำหนดค่าจำนวนสูงสุดที่ต้องการแทนที่
          for (let i = 3; i <= max; i++) {
            const selector = dropdownpath.replace('${int}', i);
            cy.get(selector).then(($el) => {
              if ($el.length > 0) {
                cy.wrap($el).click();
              }
            });
          }
        });
      }
    }
  }
  
  export default dropdowntab1;

