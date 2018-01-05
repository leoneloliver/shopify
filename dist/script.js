"use strict";var checkEmail=function(){var e=document.getElementsByName("email"),s=document.getElementsByName("interest"),t=document.getElementsByClassName("news__alert"),a=document.getElementsByClassName("news__hr");return/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e[0].value)?(a[0].classList.add("news-sent__hr"),t[0].classList.add("news__alert--hide"),console.log("Email: "+e[0].value),console.log("Interest: "+s[0].value)):(a[0].classList.remove("news-sent__hr"),t[0].classList.remove("news__alert--hide"),e[0].focus),!1};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJjaGVja0VtYWlsIiwiZW1haWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlOYW1lIiwiaW50ZXJlc3QiLCJjb25zb2xlIiwiZXJyb3JfbXNnIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsImxpbmUiLCJ2YWx1ZSIsImZpbHRlciIsInJlbW92ZSIsInRlc3QiXSwibWFwcGluZ3MiOiJhQUFBLElBQUlBLFdBQWEsV0FDZixJQUFJQyxFQUFRQyxTQUFTQyxrQkFBa0IsU0FEckNILEVBQWFFLFNBQWJGLGtCQUFtQixZQUNqQkMsRUFBUUMsU0FBU0MsdUJBQXJCLGVBQ0lDLEVBQUFBLFNBQVdGLHVCQUEyQixZQVl4Q0csTUFYSUMsa0VBQ09KLEtBQUFBLEVBQVNLLEdBQUFBLFFBS3BCTixFQUFBQSxHQUFBTyxVQUFBQyxJQUFBLGlCQUhGSCxFQUlNLEdBQUFFLFVBQUFDLElBQUEscUJBQ0pDLFFBQVFGLElBQUFBLFVBQWNQLEVBQUEsR0FBQVUsT0FDdEJMLFFBQUFBLElBQUEsYUFBdUJHLEVBQUksR0FBQUUsU0FQN0JELEVBQU1FLEdBQUFBLFVBQVNDLE9BQUEsaUJBQ2ZQLEVBQVlRLEdBQUFBLFVBQUtELE9BQWpCLHFCQUNFSCxFQUFBLEdBQVFGLFFBT1JIIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBjaGVja0VtYWlsID0gKCkgPT4ge1xyXG4gIGxldCBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdlbWFpbCcpO1xyXG4gIGxldCBpbnRlcmVzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdpbnRlcmVzdCcpO1xyXG4gIGNvbnN0IGVycm9yX21zZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuZXdzX19hbGVydFwiKTtcclxuICBjb25zdCBsaW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5ld3NfX2hyXCIpO1xyXG4gIGNvbnN0IGZpbHRlciA9IC9eKFthLXpBLVowLTlfXFwuXFwtXSkrXFxAKChbYS16QS1aMC05XFwtXSkrXFwuKSsoW2EtekEtWjAtOV17Miw0fSkrJC87XHJcbiAgaWYgKCFmaWx0ZXIudGVzdChlbWFpbFswXS52YWx1ZSkpIHsgXHJcbiAgICBsaW5lWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJuZXdzLXNlbnRfX2hyXCIpO1xyXG4gICAgZXJyb3JfbXNnWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJuZXdzX19hbGVydC0taGlkZVwiKTtcclxuICAgIGVtYWlsWzBdLmZvY3VzO1xyXG4gICB9ZWxzZXtcclxuICAgIGxpbmVbMF0uY2xhc3NMaXN0LmFkZChcIm5ld3Mtc2VudF9faHJcIik7XHJcbiAgICBlcnJvcl9tc2dbMF0uY2xhc3NMaXN0LmFkZChcIm5ld3NfX2FsZXJ0LS1oaWRlXCIpO1xyXG4gICAgY29uc29sZS5sb2coJ0VtYWlsOiAnK2VtYWlsWzBdLnZhbHVlKTtcclxuICAgIGNvbnNvbGUubG9nKCdJbnRlcmVzdDogJytpbnRlcmVzdFswXS52YWx1ZSk7XHJcbiAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
