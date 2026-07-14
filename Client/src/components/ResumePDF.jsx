import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
    fontSize: 11,
    lineHeight: 1.6,
  },

  header: {
    textAlign: "center",
    marginBottom: 15,
    borderBottom: "2 solid #000",
    paddingBottom: 10,
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },

  contact: {
    fontSize: 10,
    marginBottom: 2,
  },

  section: {
    marginTop: 10,
  },

  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#222",
    borderBottom: "1 solid #555",
    paddingBottom: 3,
  },

  text: {
    fontSize: 11,
    marginBottom: 3,
  },

  bullet: {
    marginLeft: 12,
    marginBottom: 3,
    fontSize: 11,
  },

  link: {
    color: "blue",
    textDecoration: "none",
  },
});

const ResumePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>

      {/* Header */}

      <View style={styles.header}>
        <Text style={styles.name}>
          NARENDRA VISHWAKARMA
        </Text>

        <Text style={styles.contact}>
          Bhopal, Madhya Pradesh
        </Text>

        <Text style={styles.contact}>
          Phone : +91 9301603847
        </Text>

        <Text style={styles.contact}>
          Email : narendravishvkarma5@gmail.com
        </Text>

        <Link
          style={styles.link}
          src="https://github.com/Narendra-v93"
        >
          GitHub :
          https://github.com/Narendra-v93
        </Link>

        <Text />

        <Link
          style={styles.link}
          src="https://narendra-portfo.vercel.app"
        >
          Portfolio :
          https://narendra-portfo.vercel.app
        </Link>

        <Text />

        <Link
          style={styles.link}
          src="https://linkedin.com/in/narendra-vishwakarma"
        >
          LinkedIn :
          https://linkedin.com/in/narendra-vishwakarma
        </Link>
      </View>

      {/* Summary */}

      <View style={styles.section}>
        <Text style={styles.title}>
          PROFESSIONAL SUMMARY
        </Text>

        <Text style={styles.text}>
          Full Stack Developer focused on building clean,
          responsive, and practical web applications using
          the MERN stack. Comfortable working across
          frontend and backend with hands-on experience
          in REST APIs, authentication, database
          integration, and modern UI development.
          Interested in creating products that are
          simple to use, reliable, and visually polished.
        </Text>
      </View>

      {/* Skills */}

      <View style={styles.section}>
        <Text style={styles.title}>
          TECHNICAL SKILLS
        </Text>

        <Text style={styles.bullet}>
          • Frontend : HTML5, CSS3, JavaScript,
          React.js, Tailwind CSS, Bootstrap,
          Framer Motion
        </Text>

        <Text style={styles.bullet}>
          • Backend : Node.js, Express.js,
          REST APIs, JWT Authentication
        </Text>

        <Text style={styles.bullet}>
          • Database : MongoDB, Mongoose,
          MySQL, PostgreSQL
        </Text>

        <Text style={styles.bullet}>
          • Tools : Git, GitHub, VS Code,
          Docker, Nodemailer
        </Text>

        <Text style={styles.bullet}>
          • Core Strengths : Responsive Design,
          API Integration, Deployment,
          Clean UI Implementation
        </Text>
      </View>

      {/* Projects */}

      <View style={styles.section}>
        <Text style={styles.title}>
          PROJECTS
        </Text>

        <Text style={styles.bullet}>
          • MERN Chat App : Built a real-time
          chat application using JWT authentication
          and Socket.io.
        </Text>

        <Text style={styles.bullet}>
          • Portfolio Website : Developed using
          React and Tailwind CSS with smooth
          animations and dark mode support.
        </Text>

        <Text style={styles.bullet}>
          • Contact API : Built backend service
          using Node.js and Nodemailer for
          contact form submissions.
        </Text>

        <Text style={styles.bullet}>
          • E-Commerce App : Product listing,
          shopping cart and payment flow
          using MERN Stack.
        </Text>
      </View>
            {/* Education */}
      <View style={styles.section}>
        <Text style={styles.title}>EDUCATION</Text>

        <Text style={styles.bullet}>
          • B.Tech, Computer Science Engineering
        </Text>
        <Text style={styles.bullet}>
          Jai Narayan College of Technology, 2026
        </Text>

        <Text style={styles.bullet}>
          • Class 12 (Maths)
        </Text>
        <Text style={styles.bullet}>
          Govt. Model School NGH, 2021
        </Text>

        <Text style={styles.bullet}>
          • Class 10 (MP Board)
        </Text>
        <Text style={styles.bullet}>
          Govt. Model School NGH, 2019
        </Text>
      </View>

      {/* Achievements */}
      <View style={styles.section}>
        <Text style={styles.title}>ACHIEVEMENTS</Text>

        <Text style={styles.bullet}>
          • Built a MERN Stack project within 24 hours.
        </Text>

        <Text style={styles.bullet}>
          • Ranked in the Top 10% on Codeforces and LeetCode.
        </Text>

        <Text style={styles.bullet}>
          • Contributed to Open Source projects through GitHub.
        </Text>
      </View>

      {/* Certifications */}
      <View style={styles.section}>
        <Text style={styles.title}>CERTIFICATIONS</Text>

        <Text style={styles.bullet}>
          • Full Stack Developer — RICR
        </Text>
        <Text style={styles.bullet}>
          • Java — RICR
        </Text>

        <Text style={styles.bullet}>
          • Data Analysis — Deloitte
        </Text>

        <Text style={styles.bullet}>
          • Cyber Security — Deloitte
        </Text>
      </View>

      {/* Soft Skills */}
      <View style={styles.section}>
        <Text style={styles.title}>SOFT SKILLS</Text>

        <Text style={styles.bullet}>
          • Problem Solving
        </Text>

        <Text style={styles.bullet}>
          • Team Collaboration
        </Text>

        <Text style={styles.bullet}>
          • Communication
        </Text>

        <Text style={styles.bullet}>
          • Adaptability
        </Text>

        <Text style={styles.bullet}>
          • Time Management
        </Text>
      </View>

      {/* Languages */}
      <View style={styles.section}>
        <Text style={styles.title}>LANGUAGES</Text>

        <Text style={styles.bullet}>
          • Hindi (Native)
        </Text>

        <Text style={styles.bullet}>
          • English (Professional)
        </Text>
      </View>

      {/* Interests */}
      <View style={styles.section}>
        <Text style={styles.title}>INTERESTS</Text>

        <Text style={styles.bullet}>
          • Coding Challenges
        </Text>

        <Text style={styles.bullet}>
          • Blogging
        </Text>

        <Text style={styles.bullet}>
          • Exploring New Technology
        </Text>

        <Text style={styles.bullet}>
          • Gaming
        </Text>
      </View>

  </Page>
  </Document>
);

export default ResumePDF;