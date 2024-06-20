var winWidth = $(window).width();
var ratio = winWidth / 1920;
var fontSize = {
  small: 12,
  medium: 14,
};
var played = [0, 0, 0];
var vara = [];
var bodyFontSize = Math.max(16 * ratio, 10);
var posX = Math.max(80 * ratio, 30);
$("body").css("font-size", bodyFontSize + "px");
fontSize.small = Math.max(fontSize.small * ratio, 7);
fontSize.medium = Math.max(fontSize.medium * ratio, 10);

$(window).on("resize", function () {
  winWidth = $(window).width();
  ratio = winWidth / 1920;
  bodyFontSize = Math.max(16 * ratio, 10);
  posX = Math.max(80 * ratio, 30);
  $("body").css("font-size", bodyFontSize + "px");
  fontSize.small = Math.max(fontSize.small * ratio, 7);
  fontSize.medium = Math.max(fontSize.medium * ratio, 10);

  vara.forEach(function (v) {
    v.animation.reset();
    v.animation.updateOptions({
      fontSize: fontSize.medium,
    });
  });
});

vara[0] = new Vara(
  "#vara-container",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "10 May 19 ",
      textAlign: "right",
      y: 20,
      x: -30,
      delay: 500,
      duration: 1500,
      fontSize: fontSize.small,
    },
    {
      text: "Jab maine tumhe pehli baar dekha, meri duniya badal gayi.",
      y: 40,
      x: posX,
      duration: 4000,
    },
    {
      text: "Tumhari muskaan, aur tumhare pyaare se cahere par woh pyara sa til bahot accha lagta hai yaar.",
      id: "sphinx",
      x: posX,
      delay: 1000,
      duration: 4500,
    },
    {
      text: "I know you don't have feelings for me, but I have",
      id: "end",
      color: "#3f51b5",
      delay: 1000,
      x: posX,
      duration: 4500,
    },
  ],
  {
    strokeWidth: 2,
    fontSize: fontSize.medium,
    autoAnimation: false,
  }
);
vara[1] = new Vara(
  "#vara-container2",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "16 June 19",
      textAlign: "right",
      delay: 500,
      y: 20,
      x: -30,
      duration: 1500,
      fontSize: fontSize.small,
    },
    {
      text: "I know you told me I will find better than you, but",
      y: 40,
      x: posX,
      duration: 4000,
    },
    {
      text: "Tuje bhi pata hai aur muje bhi nahi mile gi. Aur mill bhi jaye to tu hi rakh nahi cahiye muje tujse aachi...",
      y: 40,
      x: posX,
      duration: 3500,
    },
  ],
  {
    strokeWidth: 2,
    fontSize: fontSize.medium,
    autoAnimation: false,
  }
);
vara[2] = new Vara(
  "#vara-container3",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "11 Oct 19",
      textAlign: "right",
      delay: 500,
      y: 20,
      x: -30,
      duration: 1500,
      fontSize: fontSize.small,
    },
    {
      text: "It was your birthday, and you wore a white chaniya choli. Sach mein, tum pari lag rahi thi.",
      y: 40,
      x: posX,
      duration: 4000,
    },
    {
      text: "Koi, aur dooja, kyun mujhe Na tere siva chahiye, Har safar mein mujhe Tu hi rehnuma chahiye, Jeene ko, bas mujhe Tu hi mehrma chahiye... Please..",
      y: 20,
      x: posX,
      duration: 3500,
    },
  ],
  {
    strokeWidth: 2,
    fontSize: fontSize.medium,
    autoAnimation: false,
  }
);
vara[2].ready(function () {
  $(".front:not(.last)").click(function () {
    var ix = $(this).parent(".paper").index();
    $(".book").addClass("open");
    $(this).parent(".paper").addClass("open");
    if (!played[ix]) {
      vara[ix].playAll();
      vara[ix].animationEnd(function (i, o) {
        played[ix] = 1;
        if (i == "link") {
          var group = o.container;
          var rect = vara[2].createNode("rect", {
            x: 0,
            y: 0,
            width: o.container.getBoundingClientRect().width,
            height: o.container.getBoundingClientRect().height,
            fill: "transparent",
          });
          group.appendChild(rect);
          $(rect).css("cursor", "pointer");
          $(rect).click(function () {
            console.log(true);
            document.querySelector("#link").click();
          });
        }
      });
    }
  });
  $(".back").click(function () {
    if ($(this).parent(".paper").index() == 0) $(".book").removeClass("open");
    $(this).parent(".paper").removeClass("open");
  });
});
