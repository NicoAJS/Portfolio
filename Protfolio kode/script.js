document.addEventListener("DOMContentLoaded", function() {
    const stBilledeList = document.querySelectorAll(".stBillede");
    const liBillederList = document.querySelectorAll(".liBilleder");

    liBillederList.forEach((liBilleder, index) => {
        const stBillede = stBilledeList[index];

        liBilleder.querySelectorAll("img").forEach(img => {
            img.addEventListener("click", function() {
                const src = this.getAttribute("src"); 
                stBillede.setAttribute("src", src); 
            });
        });
    });
});


