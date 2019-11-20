const name = "Merve";
const department = "Bilişim";
const yaş = 23;

const a = `İsim:${name}\nDepartman:${department}\nYaş:${yaş}`;
//altgr+;; ile backtrick isareti icine yazıyoruz

//eger biz bunu html sayfamızda gormek istiyorsak bu sekilde template olusturabiliriz
//dolar işaretiyle biz javascript kodumuzu da bu html içinde kullanabiliyoruz,fonksiyonlar da dahil.

const html = `
            
        <ul>
            <li>${name}</li>
            <li>${department.toUpperCase()}</li>
            <li>${yaş}</li>

         </ul>   
        `;
document.body.innerHTML = html;



console.log(a);
