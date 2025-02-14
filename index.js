//code 1


const t1=performance.now()

for(let i=1;i<=100;i++)
{
    let para=document.createElement('p');
    para.textContent="this is para"+i;
    document.body.appendChild(para);

}
const t2=performance.now();
console.log("total time by code 1"+(t2-t1));


//code 2  div ke andr para

const t3=performance.now();
let mydiv=document.createElement('div');

for(let i=0;i<=100;i++)
{
    let para=document.createElement('p');
    para.textContent="this is para"+i;
    mydiv.appendChild(para);
}
document.body.appendChild(mydiv);
const t4=performance.now();
console.log("total time by code 1"+(t4-t3));


//code3 
//use document fragment 
//use addition --->reflow
          //     --->repaint
          //best code 
          let fragment=document.createDocumentFragment();

          for(let i=0;i<=100;i++)
          {
            let para=document.createElement('p');
            para.textContent="this is para"+i;
            //no reflow and no repaint 
            fragment.appendChild(para);
          }
          //the below line takes i reflow and repaint 
          document.body.appendChild(fragment);

