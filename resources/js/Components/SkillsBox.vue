<script setup>

</script>

<template>
    <section class="expertise-section text-white ">
        <h2>My Expertise</h2>
        <div class="expertise-grid">
            <!-- Software Development -->
            <div class="expertise-card">
                <h3 class="category-title">Software Development</h3>
                <p>Experienced in functional and OOP: Dart, Python, Java, JavaScript, TypeScript.</p>
                <ul>
                    <li>Robust application design</li>
                    <li>Data structures and algorithms</li>
                    <li>Unit testing and CI</li>
                </ul>
            </div>

            <!-- Frontend Development -->
            <div class="expertise-card">
                <h3 class="category-title">Frontend Development</h3>
                <p>Expert in creating modern, intuitive, and performant user interfaces.</p>
                <ul>
                    <li>Frameworks: Vue.js, React, Next.js</li>
                    <li>Responsive and accessible design</li>
                    <li>Tools: TailwindCSS, Vuetify, Bootstrap</li>
                </ul>
            </div>

            <!-- Mobile App Development -->
            <div class="expertise-card">
                <h3 class="category-title">Flutter Development</h3>
                <p>Skilled in developing cross-platform mobile apps with Flutter for Android and iOS.</p>
                <ul>
                    <li>Integration with Firebase</li>
                    <li>Advanced animations</li>
                    <li>Performance optimization</li>
                </ul>
            </div>

            <!-- Backend Development -->
            <div class="expertise-card">
                <h3 class="category-title">Backend Development</h3>
                <p>Building reliable backend architectures for web and mobile apps.</p>
                <ul>
                    <li>Languages: PHP, Python, JavaScript</li>
                    <li>Frameworks: Laravel, Node.js</li>
                    <li>Databases: MySQL, PostgreSQL, MongoDB</li>
                </ul>
            </div>

            <!-- DevOps -->
            <div class="expertise-card">
                <h3 class="category-title">DevOps</h3>
                <p>Automating deployments and managing environments effectively.</p>
                <ul>
                    <li>Tools: Docker, GitHub Actions</li>
                    <li>CI/CD pipelines: GitLab CI/CD, Jenkins</li>
                    <li>Monitoring and alerts</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style scoped>


body {
    font-family: Arial, sans-serif;
    background-color: #121212;
    color: #fff;
    margin: 0;
    padding: 20px;
}

h2 {
    text-align: center;
    font-size: 2.5em;
    margin-bottom: 20px;
}

.expertise-section {
    max-width: 1200px;
    margin: 0 auto;
}

.expertise-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.expertise-card {
    background-color: #1e1e1e;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;
}

.expertise-card:hover {
    transform: translateY(-5px);
}

.category-title {
    color: #ff6f61;
    font-size: 1.5em;
    margin-bottom: 10px;
}

p {
    font-size: 1em;
    margin-bottom: 10px;
}

ul {
    list-style: none;
    padding: 0;
}

ul li {
    margin-bottom: 5px;
    font-size: 0.9em;
    position: relative;
}

ul li::before {
    content: "•";
    color: #ff6f61;
    margin-right: 10px;
    font-size: 1.2em;
}

</style>
