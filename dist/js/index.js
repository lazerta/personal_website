 const heading = document.querySelector("h2.sm-heading");
 const text = "Check out some of my projects..."
 const typewriter =  new Typewriter(heading, {
    loop: true,
    autoStart: true,
    wrapperClassName: "sm-heading"
});
typewriter.typeString(text)
    .pauseFor(2500)
    .deleteChars(2)
    .pauseFor(2000)
    .deleteAll()
    .pauseFor(500)
    .start();

    setTimeout(toggleMenu,1500);