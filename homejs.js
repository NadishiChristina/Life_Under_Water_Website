
            document.addEventListener("mousemove", function(e) {
                let bubble = document.createElement("div");
                bubble.classList.add("bubble");
                document.body.appendChild(bubble);
            
                // Position the bubble at the mouse pointer
                bubble.style.left = `${e.clientX}px`;
                bubble.style.top = `${e.clientY}px`;
            
                // Remove the bubble after animation
                setTimeout(() => {
                    bubble.remove();
                }, 800);
            });

            
            function revealOnScroll() {
                const elements = document.querySelectorAll('.hidden');
                elements.forEach((element) => {
                    const position = element.getBoundingClientRect().top;
                    const screenHeight = window.innerHeight;
                    
                    if (position < screenHeight - 100) {
                        element.classList.add('show');
                    }
                });
            }

            document.addEventListener("scroll", revealOnScroll);

            function createBubbles() {
                let hero = document.querySelector(".hero");
                for (let i = 0; i < 10; i++) {
                    let bubble = document.createElement("div");
                    bubble.classList.add("bubble-bg");
                    bubble.style.left = `${Math.random() * 100}%`;
                    bubble.style.width = `${Math.random() * 15 + 5}px`;
                    bubble.style.height = bubble.style.width;
                    bubble.style.animationDuration = `${Math.random() * 5 + 3}s`;
                    hero.appendChild(bubble);

                    setTimeout(() => {
                        bubble.remove();
                    }, 8000);
                }
            }

            // Create bubbles only when the SDG section is in view
            const sdgObserver = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setInterval(createBubbles, 2000); // Only runs when visible
                    }
                });
            }, { threshold: 0.5 });

            sdgObserver.observe(document.querySelector(".hero"));



            