var checkEmail = () => {
  let email = document.getElementsByName('email');
  let interest = document.getElementsByName('interest');
  const error_msg = document.getElementsByClassName("news__alert");
  const line = document.getElementsByClassName("news__hr");
  const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!filter.test(email[0].value)) { 
    line[0].classList.remove("news-sent__hr");
    error_msg[0].classList.remove("news__alert--hide");
    email[0].focus;
   }else{
    line[0].classList.add("news-sent__hr");
    error_msg[0].classList.add("news__alert--hide");
    console.log('Email: '+email[0].value);
    console.log('Interest: '+interest[0].value);
   }
    return false;
}
