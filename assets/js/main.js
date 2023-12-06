let next = document.getElementById('next');

let refresh = setInterval(() =>{next.click()},10000)

document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
    clearInterval(refresh);
    refresh = setInterval(() =>{next.click()},10000)
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
    clearInterval(refresh);
    refresh = setInterval(() =>{next.click()},10000)
}

  