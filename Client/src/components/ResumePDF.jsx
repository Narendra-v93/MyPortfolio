import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Styles
const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 12, lineHeight: 1.5, fontFamily: "Helvetica" },
  section: { marginBottom: 12 },
  header: { fontSize: 20, marginBottom: 6, fontWeight: "bold" },
  subHeader: { fontSize: 14, marginTop: 6, marginBottom: 4, fontWeight: "bold" },
  text: { fontSize: 12, marginBottom: 2 },
});

const ResumePDF = () => (
  <Document>
    <Page style={styles.page}>
      {/* Header */}
      <View style={styles.section}>
        <Text style={styles.header}>NARENDRA VISHWAKARMA</Text>
        <Text style={styles.text}>Email: narendravishvkarma1@gmail.com</Text>
        <Text style={styles.text}>Phone: 9301603847</Text>
        <Text style={styles.text}>GitHub: github.com/Narendra-v93</Text>
        <Text style={styles.text}>Portfolio: yourportfolio.com</Text>
        <Text style={styles.text}>LinkedIn: linkedin.com/in/narendra-vishwakarma</Text>
      </View>

      {/* Professional Summary */}
      <View style={styles.section}>
        <Text style={styles.subHeader}>Professional Summary</Text>
        <Text style={styles.text}>
          Full Stack Developer with expertise in MERN stack (MongoDB, Express, React, Node.js). 
          Experienced in building responsive, scalable web applications, secure REST APIs, and 
          implementing modern UI/UX design. Passionate about delivering user-centered and efficient solutions.
        </Text>
      </View>

      {/* Technical Skills */}
      <View style={styles.section}>
        <Text style={styles.subHeader}>Technical Skills</Text>
        <Text style={styles.text}>Frontend: HTML5, CSS3, Tailwind CSS, Bootstrap, React.js, Framer Motion</Text>
        <Text style={styles.text}>Backend: Node.js, Express.js, REST API, JWT Authentication</Text>
        <Text style={styles.text}>Database: MongoDB, Mongoose, MySQL/PostgreSQL</Text>
        <Text style={styles.text}>Tools: Git, GitHub, VS Code, Nodemailer, Docker</Text>
        <Text style={styles.text}>Other: Responsive Design, Animation-driven UI, Deployment pipelines</Text>
      </View>

      {/* Projects */}
      <View style={styles.section}>
        <Text style={styles.subHeader}>Projects</Text>
        <Text style={styles.text}>MERN Chat App – Real-time chat application with JWT authentication and socket.io integration</Text>
        <Text style={styles.text}>Portfolio Website – Built using React and Tailwind CSS, including animations and dark mode toggle</Text>
        <Text style={styles.text}>Contact API – Email integration using Nodemailer with Node.js backend</Text>
        <Text style={styles.text}>E-commerce App – MERN stack, product listing, cart management, and payment gateway integration</Text>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.subHeader}>Education</Text>
        <Text style={styles.text}>B.Tech – Computer Science Engineering | Jai Narayan College of Technology – 2026</Text>
        <Text style={styles.text}>12th – Maths | Govt. Model School Ngh – 2021</Text>
        <Text style={styles.text}>10th – Mp Board | Govt. Model School Ngh – 2019</Text>
      </View>

      {/* Achievements */}
      <View style={styles.section}>
        <Text style={styles.subHeader}>Achievements</Text>
        <Text style={styles.text}> Built a MERN stack project within 24 hours</Text>
        <Text style={styles.text}> Secured top 10% in Codeforces & LeetCode problem solving challenges</Text>
        <Text style={styles.text}> Contributed to open source projects on GitHub</Text>
      </View>

      {/* Soft Skills */}
      <View style={styles.section}>
        <Text style={styles.subHeader}>Soft Skills</Text>
        <Text style={styles.text}>Problem Solving | Team Collaboration | Communication | Adaptability | Time Management</Text>
      </View>

      {/* Languages */}
      <View style={styles.section}>
        <Text style={styles.subHeader}>Languages</Text>
        <Text style={styles.text}>English – Professional</Text>
        <Text style={styles.text}>Hindi – Native</Text>
      </View>

      {/* Certifications */}
      <View style={styles.section}>
        <Text style={styles.subHeader}>Certifications</Text>
        <Text style={styles.text}>Full Stack Web Development – freeCodeCamp</Text>
        <Text style={styles.text}>React JS – Udemy</Text>
        <Text style={styles.text}>Node.js & Express – Coursera</Text>
      </View>

      {/* Hobbies */}
      <View style={styles.section}>
        <Text style={styles.subHeader}>Hobbies</Text>
        <Text style={styles.text}>Coding Challenges | Blogging | Exploring New Tech | Gaming</Text>
      </View>
    </Page>
  </Document>
);

export default ResumePDF;