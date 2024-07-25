class penciltab1 {
    pencilloop(pencilpaths) {
        // ตรวจสอบว่า pencilpaths ไม่ใช่ undefined และเป็น array
        if (pencilpaths && Array.isArray(pencilpaths)) {
            pencilpaths.forEach((path) => {
                cy.get(path).click();
            });
        } else {
            cy.log('pencilpaths is not an array or is undefined');
        }
    }
}

export default penciltab1;
