import _ from 'lodash';

//pageNumber is the the current page
//eachPage total number of items to be displayed per page
//total= every every
export function Paginate (total, pageNumber, eachPage){

    const startIndex = (pageNumber - 1) * eachPage;

    return  _(total).slice(startIndex).take(eachPage).value();
    

}