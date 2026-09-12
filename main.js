/* =========================================
   CREATE STAR FIELD
========================================= */

const starContainer = document.getElementById("stars");

const STAR_COUNT = 180;

for (let i = 0; i < STAR_COUNT; i++) {

    const star = document.createElement("div");

    star.classList.add("star");

    // Random position
    star.style.left =
        Math.random() * 100 + "%";

    star.style.top =
        Math.random() * 100 + "%";

    // Random size
    const size =
        Math.random() * 2 + 1;

    star.style.width =
        size + "px";

    star.style.height =
        size + "px";

    // Random animation timing
    star.style.animationDelay =
        Math.random() * 3 + "s";

    star.style.animationDuration =
        2 + Math.random() * 4 + "s";

    starContainer.appendChild(star);
}


/* =========================================
   ENTER BUTTON
========================================= */

const enterButton =
    document.getElementById("enterButton");

if (enterButton) {

    enterButton.addEventListener("click", () => {

        const journey =
            document.getElementById("journey");

        if (journey) {

            journey.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}


/* =========================================
   TIMELINE SCROLL ANIMATION
========================================= */

const timelineItems =
    document.querySelectorAll(".timeline-item");

if (timelineItems.length > 0) {

    const timelineObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        timelineObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.2
            }
        );

    timelineItems.forEach((item) => {

        timelineObserver.observe(item);

    });

}


/* =========================================
   MEMORIES BUTTON
========================================= */

const memoriesButton =
    document.getElementById("memoriesButton");

const memoriesSection =
    document.getElementById("memories");

if (memoriesButton && memoriesSection) {

    memoriesButton.addEventListener("click", () => {

        memoriesSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

}

/* =========================================
   CHAPTER III — SCROLL ANIMATION
========================================= */

const littleCards =
    document.querySelectorAll(".little-card");

if (littleCards.length > 0) {

    const chapterThreeObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        chapterThreeObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.2
            }
        );

    littleCards.forEach((card) => {

        chapterThreeObserver.observe(card);

    });

}


/* =========================================
   CHAPTER III → CHAPTER IV
========================================= */

const nextChapterButton =
    document.getElementById("nextChapterButton");

if (nextChapterButton) {

    nextChapterButton.addEventListener("click", () => {

        const chapterFour =
            document.getElementById("chapter-four");

        if (chapterFour) {

            chapterFour.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

}


/* =========================================
   CHAPTER IV → CHAPTER V
========================================= */

const finalChapterButton =
    document.getElementById("finalChapterButton");

if (finalChapterButton) {

    finalChapterButton.addEventListener("click", () => {

        const chapterFive =
            document.getElementById("chapter-five");

        if (chapterFive) {

            chapterFive.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

}


/* =========================================
   CHAPTER V — FINALE REVEAL
========================================= */

const revealMessageButton =
    document.getElementById("revealMessageButton");

const constellation =
    document.querySelector(".constellation");

const finaleMessage =
    document.getElementById("finaleMessage");

if (
    revealMessageButton &&
    constellation &&
    finaleMessage
) {

    revealMessageButton.addEventListener("click", () => {

        constellation.classList.add("active");

        setTimeout(() => {

            finaleMessage.classList.add("visible");

            finaleMessage.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 1500);

        revealMessageButton.style.opacity = "0";
        revealMessageButton.style.pointerEvents = "none";

    });

}

/* =========================================
   BACKGROUND MUSIC
========================================= */

const backgroundMusic =
    document.getElementById("backgroundMusic");

const musicToggle =
    document.getElementById("musicToggle");

let musicPlaying = false;


/* =========================================
   START MUSIC WITH BEGIN JOURNEY
========================================= */

if (enterButton && backgroundMusic && musicToggle) {

    enterButton.addEventListener("click", () => {

        backgroundMusic.volume = 0.15;

        backgroundMusic.play()
            .then(() => {

                musicPlaying = true;

                musicToggle.classList.add("active");
                musicToggle.classList.add("playing");

            })
            .catch((error) => {

                console.log(
                    "Music could not start:",
                    error
                );

            });

    });

}


/* =========================================
   MUSIC TOGGLE
========================================= */

if (musicToggle && backgroundMusic) {

    musicToggle.addEventListener("click", () => {

        if (musicPlaying) {

            backgroundMusic.pause();

            musicPlaying = false;

            musicToggle.classList.remove("playing");

        } else {

            backgroundMusic.play()
                .then(() => {

                    musicPlaying = true;

                    musicToggle.classList.add("playing");

                })
                .catch((error) => {

                    console.log(
                        "Music could not play:",
                        error
                    );

                });

        }

    });

}
