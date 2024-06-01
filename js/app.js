new WOW().init();

$(document).ready(function () {
  $(".second-button").on("click", function () {
    $(".animated-icon2").toggleClass("open");
  });
});

//select dropdown
var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      /*when an item is clicked, update the original select box,
        and the selected item:*/
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

// search-box open close js code
let navbar = document.querySelector(".navbar");

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
  navLinks.style.left = "0";
};
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%";
};

// sidebar submenu open close js code
setTimeout(() => {
  let htmlcssArrow = document.querySelector(".htmlcss-arrow");
  htmlcssArrow.onclick = function () {
    navLinks.classList.toggle("show1");
  };
  // console.log(htmlcssArrow);
  let moreArrow = document.querySelector(".more-arrow");
  moreArrow.onclick = function () {
    navLinks.classList.toggle("show2");
  };
}, 1000);
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function () {
  navLinks.classList.toggle("show3");
};

//password show hide js
$(".toggle-password").click(function () {
  $(this).toggleClass("fa-eye fa-eye-slash");
  input = $(this).parent().find("input");
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

/* dashboard tab */
function changeDailyGraph(graphIndex) {
  const links = document.querySelectorAll(".graph-link");
  const graphImage = document.querySelectorAll(".graph-image-repalce");
  console.log(links);
  for (const link of links) {
    console.log(link);
    link.classList.remove("active-tab");
  }
  for (const img of graphImage) {
    img.classList.remove("showgraph");
  }
  links[graphIndex].classList.add("active-tab");
  graphImage[graphIndex].classList.add("showgraph");
  console.log(graphImage);
}
function hideIcon(self) {
  self.style.backgroundImage = "none";
}

// limit instant tab
$(document).ready(function () {
  $("input[name$='cars']").click(function () {
    var test = $(this).val();
    $("div.desc").hide();
    $("#Cars" + test).show();
  });
});

//buy sell tab js
function ClickableTab(contentChangable) {
  const activeLinks = document.querySelectorAll(".common-btn");
  const contentRepls = document.querySelectorAll(".content-change");
  for (const activeLink of activeLinks) {
    activeLink.classList.remove("active");
  }
  for (const contentRepl of contentRepls) {
    contentRepl.classList.remove("showcontent");
  }
  activeLinks[contentChangable].classList.add("active");
  contentRepls[contentChangable].classList.add("showcontent");
}

//tab for sell btc
$("[name=tab]").each(function (i, d) {
  var p = $(this).prop("checked");
  if (p) {
    $("article").eq(i).addClass("on");
  }
});

$("[name=tab]").on("change", function () {
  var p = $(this).prop("checked");
  var i = $("[name=tab]").index(this);
  $("article").removeClass("on");
  $("article").eq(i).addClass("on");
});

showDownload = () => {
  document.getElementById("showbuybtndash").style.display = "block";
  document.getElementById("dashchangable").style.display = "none";
};
hideBuyContainer = () => {
  document.getElementById("showbuybtndash").style.display = "none";
  document.getElementById("dashchangable").style.display = "block";
};

// deposit withdrawl and get credit js

function changeDepositWithGet(contentChangable) {
  const activeLinks = document.querySelectorAll(".common-dor-tab");
  const contentRepls = document.querySelectorAll(".change-deposit-withdraw");
  for (const activeLink of activeLinks) {
    activeLink.classList.remove("dor-active-tab");
  }
  for (const contentRepl of contentRepls) {
    contentRepl.classList.remove("show-deposit-withdraw");
  }
  activeLinks[contentChangable].classList.add("dor-active-tab");
  contentRepls[contentChangable].classList.add("show-deposit-withdraw");
}

//limit history tab

function limitHistTab(contentChangableLim) {
  const activeLinks = document.querySelectorAll(".common-limit-tab");
  const contentRepls = document.querySelectorAll(".limchange-deposit-withdraw");
  for (const activeLink of activeLinks) {
    activeLink.classList.remove("limit-active-tab");
  }
  for (const contentRepl of contentRepls) {
    contentRepl.classList.remove("limshow-deposit-withdraw");
  }
  activeLinks[contentChangableLim].classList.add("limit-active-tab");
  contentRepls[contentChangableLim].classList.add("limshow-deposit-withdraw");
}

/*only number type js*/
function onlyNumberKey(evt) {
  var ASCIICode = evt.which ? evt.which : evt.keyCode;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
  return true;
}
