const pagesKey = 'pages';;

let pageJson = localStorage.getItem(pagesKey);
let pageStore = JSON.parse(pageJson);

function save(){
    localStorage.setItem(pagesKey, JSON.stringify(pageStore));
}

export default {
    addPage(page){
        pageStore.push(page);
        localStorage.setItem(pagesKey, JSON.stringify(pageStore));
    },

    getAllPages(){
        return pageStore;
    },

    getSinglePage(index){
        return pageStore[index];
    },

    editPage(index, page){
        pageStore[index] = page;

        localStorage.setItem(pagesKey, JSON.stringify(pageStore));
    },

    removePage(index){
        pageStore.splice(index, 1);
    }
}