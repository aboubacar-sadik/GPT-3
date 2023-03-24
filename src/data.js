import htmlIcon from './assets/html5.svg'
import cssIcon from './assets/css3.svg'
import javascriptIcon from './assets/javascript.svg'
import reactIcon from './assets/react.svg'
import figmaIcon from './assets/figma.svg'
import illustratorIcon from './assets/illustrator.svg'
import phoneFormIcon from './assets/phone.svg'
import linkedInFormIcon from './assets/linkedIn-form.svg'
import twitterFormIcon from './assets/twitter-form.svg'
import emailFormIcon from './assets/email-form.svg'

export default {
    navlinks: [
        {
            linkText: 'A Propos',
            link: '/#about'
        },
        {
            linkText: 'Compétences',
            link: '/#skills'
        },
        {
            linkText: 'Projets',
            link: '/#projects'
        },
        {
            linkText: 'Contact',
            link: '/#contact'
        },
    ],
    sectionTitle: ['A Propos', 'Compétences', 'Projets', 'Faisons connaissance !'],
    aboutItems: {
        profilImage: 'img',
        description: ["Je suis Aboubacar Sadik, j’ai 26 ans et amoureux de la technologie depuis petit. J'ai fait des études de langue française à l’université. Mon désir de créer, de résoudre des problèmes complexes et de contribuer à un changement positif m'a naturellement conduit vers une reconversion ou une doublure si on veut.", "Ayant un esprit créatif, critique et attentif aux petits détails, j'ai très vite compris que je voulais coder, je voulais créer, créer un bouton, une page web à partir de rien. C’est là que j'ai commencé à me former au developpement web en autodidacte.Par la suite j'ai obtenu des certifications en HTML, CSS, JS, React, délivrées par META, IBM via Coursera et FreeCodeCamp.", "Je parle français et anglais, ce qui me permet de travailler facilement dans un contexte international.J'applique des valeurs fortes telles que l'honnêteté, la confiance et la loyauté dans toutes les sphères de ma vie.", "Mes compétences en développement web me permettent de relever des défis complexes, d'apporter des solutions créatives et de qualité et de fournir une expérience utilisateur optimale à mes clients."]
    },
    skillsItems: [
        {
            skillIcon: htmlIcon,
            skillName: 'HTML5'
        },
        {
            skillIcon: cssIcon,
            skillName: 'CSS3'
        },
        {
            skillIcon: javascriptIcon,
            skillName: 'JavaScript'
        },
        {
            skillIcon: reactIcon,
            skillName: 'React'
        },
        {
            skillIcon: figmaIcon,
            skillName: 'Figma'
        },
        {
            skillIcon: illustratorIcon,
            skillName: 'Illustrator'
        },
    ],
    projectsItems: [
        {
            projectTitle: 'JobHunter - Job Listiing',
            projectDescription: `Page d'offres d'emploi où les utilisateurs doivent pouvoir : visualiser la mise en page optimale du site en fonction de la taille de l'écran de leur appareil, voir les états de survol de tous les éléments interactifs de la page, filtrer les offres d'emploi en fonction des catégories.`,
            tools: ['HTML5', 'CSS3', 'React']
        },
        {
            projectTitle: 'JobHunter - Job Listiing',
            projectDescription: `Page d'offres d'emploi où les utilisateurs doivent pouvoir : visualiser la mise en page optimale du site en fonction de la taille de l'écran de leur appareil, voir les états de survol de tous les éléments interactifs de la page, filtrer les offres d'emploi en fonction des catégories.`,
            tools: ['HTML5', 'CSS3', 'React']
        },
    ],
    contactItems: {
        socials: [
            {
                socialFormIcon: phoneFormIcon,
                socialFormTitle: 'Téléphone',
                socialFormItem: '+213559413891'
            },
            {
                socialFormIcon: linkedInFormIcon,
                socialFormTitle: 'LinkedIn',
                socialFormItem: 'Aboubacar Sadik'
            },
            {
                socialFormIcon: twitterFormIcon,
                socialFormTitle: 'Twitter',
                socialFormItem: 'Aboubacar Sadik'
            },
            {
                socialFormIcon: emailFormIcon,
                socialFormTitle: 'E-mail',
                socialFormItem: 'boube.sadik@gmail.com'
            },
        ],
        inputs: [
            {
                type: 'text',
                placeholder: 'Votre prénom',
                errorMessage: 'Veuillez saisir votre prénom !'
            },
            {
                type: 'email',
                placeholder: 'Votre adresse e-mail',
                errorMessage: 'Veuillez saisir votre adresse mail !'
            },
        ]
    }
}