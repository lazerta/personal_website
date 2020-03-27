 const heading = document.querySelector("h2.sm-heading");
 const typewriter =  new Typewriter(heading, {
    loop: true,
    autoStart: true,
    wrapperClassName: "sm-heading"
});
typewriter.typeString(stringToType)
    .pauseFor(2500)
    .deleteChars(2)
    .pauseFor(2000)
    .deleteAll()
    .pauseFor(500)
    .start();
