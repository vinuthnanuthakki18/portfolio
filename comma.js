<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nuthakki Vinuthna | Portfolio</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/scrollreveal/4.0.9/scrollreveal.min.js" defer></script>
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
</head>
<body class="bg-gray-100 text-gray-800">
    <!-- Header Section -->
    <header class="bg-gray-800 text-white py-6 sticky top-0 z-50 shadow-md">
        <div class="container mx-auto flex justify-between items-center">
            <h1 class="text-3xl font-bold">Nuthakki Vinuthna</h1>
            <nav>
                <ul class="flex space-x-4">
                    <li><a href="#about" class="hover:text-yellow-400 transition-colors">About</a></li>
                    <li><a href="#projects" class="hover:text-yellow-400 transition-colors">Projects</a></li>
                    <li><a href="#skills" class="hover:text-yellow-400 transition-colors">Skills</a></li>
                    <li><a href="#contact" class="hover:text-yellow-400 transition-colors">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- About Section -->
    <section id="about" class="py-12 bg-white">
        <div class="container mx-auto text-center">
            <h2 class="text-4xl font-bold mb-4">About Me</h2>
            <p class="text-lg">I am a passionate Software Developer with expertise in the MERN stack. I love creating impactful web applications and solving real-world problems using technology.</p>
            <img src="profile.jpeg" alt="Your Picture" class="rounded-full mx-auto mt-6 w-40 h-40 object-cover shadow-lg">
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-12 bg-gray-100">
        <div class="container mx-auto">
            <h2 class="text-4xl font-bold text-center mb-8">Projects</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Project 1 -->
                <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow">
                    <h3 class="text-2xl font-bold mb-2">Messenger App</h3>
                    <p class="text-gray-600 mb-4">A full-stack chat application built using React, Node.js, Express, and MongoDB. Features real-time messaging, user authentication, and responsive design.</p>
                    <a href="#" class="text-yellow-400 hover:underline">View Project</a>
                </div>

                <!-- Add more projects here -->
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-12 bg-white">
        <div class="container mx-auto text-center">
            <h2 class="text-4xl font-bold mb-4">Skills</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <div class="bg-gray-100 p-4 rounded-lg shadow-md hover:bg-yellow-400 hover:text-white transition-colors">JavaScript</div>
                <div class="bg-gray-100 p-4 rounded-lg shadow-md hover:bg-yellow-400 hover:text-white transition-colors">React.js</div>
                <div class="bg-gray-100 p-4 rounded-lg shadow-md hover:bg-yellow-400 hover:text-white transition-colors">Node.js</div>
                <div class="bg-gray-100 p-4 rounded-lg shadow-md hover:bg-yellow-400 hover:text-white transition-colors">Express.js</div>
                <div class="bg-gray-100 p-4 rounded-lg shadow-md hover:bg-yellow-400 hover:text-white transition-colors">MongoDB</div>
                <div class="bg-gray-100 p-4 rounded-lg shadow-md hover:bg-yellow-400 hover:text-white transition-colors">Tailwind CSS</div>
                <div class="bg-gray-100 p-4 rounded-lg shadow-md hover:bg-yellow-400 hover:text-white transition-colors">RESTful APIs</div>
                <div class="bg-gray-100 p-4 rounded-lg shadow-md hover:bg-yellow-400 hover:text-white transition-colors">Git</div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-12 bg-gray-100">
        <div class="container mx-auto text-center">
            <h2 class="text-4xl font-bold mb-4">Contact Me</h2>
            <p class="text-lg mb-6">Feel free to reach out to discuss projects or opportunities!</p>
            <form id="contactForm" class="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
                <div class="mb-4">
                    <label for="name" class="block text-left font-bold mb-2">Name</label>
                    <input type="text" id="name" name="name" class="w-full border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-yellow-400">
                </div>
                <div class="mb-4">
                    <label for="email" class="block text-left font-bold mb-2">Email</label>
                    <input type="email" id="email" name="email" class="w-full border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-yellow-400">
                </div>
                <div class="mb-4">
                    <label for="message" class="block text-left font-bold mb-2">Message</label>
                    <textarea id="message" name="message" rows="5" class="w-full border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-yellow-400"></textarea>
                </div>
                <button type="button" id="submitButton" class="bg-yellow-400 text-white px-6 py-2 rounded-lg hover:bg-yellow-500">Send Message</button>
            </form>
            
            <script>
                document.getElementById('submitButton').addEventListener('click', async () => {
                    const name = document.getElementById('name').value;
                    const email = document.getElementById('email').value;
                    const message = document.getElementById('message').value;
            
                    try {
                        const response = await fetch('http://localhost:3000/send-message', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ name, email, message }),
                        });
            
                        const data = await response.json();
            
                        if (data.success) {
                            alert('Message sent successfully!');
                        } else {
                            alert('Failed to send message. Please try again.');
                        }
                    } catch (error) {
                        alert('An error occurred. Please check your internet connection and try again.');
                        console.error(error);
                    }
                });
            </script>
            
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-6">
        <div class="container mx-auto text-center">
            <p>&copy; 2025 Nuthakki Vinuthna. All Rights Reserved.</p>
            <div class="mt-4 flex justify-center space-x-4">
                <a href="#" class="text-yellow-400 hover:text-white"><i class="fab fa-linkedin"></i></a>
                <a href="#" class="text-yellow-400 hover:text-white"><i class="fab fa-github"></i></a>
                <a href="#" class="text-yellow-400 hover:text-white"><i class="fab fa-twitter"></i></a>
            </div>
        </div>
    </footer>

    <script>
        ScrollReveal().reveal('#about', { delay: 200, origin: 'bottom', distance: '50px', duration: 1000 });
        ScrollReveal().reveal('#projects div', { delay: 200, interval: 100, origin: 'bottom', distance: '50px', duration: 1000 });
        ScrollReveal().reveal('#skills div', { delay: 200, interval: 100, origin: 'bottom', distance: '50px', duration: 1000 });
        ScrollReveal().reveal('#contact form', { delay: 200, origin: 'bottom', distance: '50px', duration: 1000 });
    </script>
</body>
</html>
