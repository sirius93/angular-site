import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  myStyle: object = {};
  myParams: object = {};
  width = 100;
  height = 100;
  public titleData = {
    title: 'About',
    subtitle: '',
    img: './assets/images/avatar-icon.png'
  };
  public description = `<div>
  <h2>Jess Tan</h2>
  <p>
      Offering creative design solutions to solve business problems is what I do best.<br>
      I write in JavaScript, CSS, Java, and PHP. I also speak to databases and make servers do stuff.
      I like working on scalability, performance, reusability, and great user experiences.
  <br><br>
      As a designer and a developer, I write code that conforms to industry standards and semantic best practices.
      I am able to transform static artwork into pixel prefect, interactive and fully functional interfaces.
  </p>
</div>`;
public experienceData = {
  title : 'Company Name',
  href : 'www.company.com',
  timeStamp : 'sep-11 to ocotober 17',
  role : 'Front End Dev'
};
public progressBar = [
  {
    title : 'HTML',
    maxValue : 100,
    value : 70,
    dataValue : 30
  },
  {
    title : 'CSS',
    maxValue : 100,
    value : 55,
    dataValue : 30
  },
  {
    title : 'JAVASCRIPT',
    maxValue : 100,
    value : 80,
    dataValue : 30
  },
  {
    title : 'ANGULAR',
    maxValue : 100,
    value : 65,
    dataValue : 30
  }
];
public HeroBannerData = {
  heading : 'Front End Developer',
  SubHeading : '<em>Hey I am a Nandan</em>',
  description : 'Specializing in building everything from small business sites to rich interactive web apps.'
};
public ProjectData = [
  {
    anchor : {
      anchorText : 'w3c.com',
      anchorLink : '#',
      imgSrc : 'https://bulma.io/images/placeholders/1280x960.png',
    },
    tags : ['HTML', 'CSS', 'JS']

  },
  {
    anchor : {
      anchorText : 'w3c.com',
      anchorLink : '#',
      imgSrc : 'https://bulma.io/images/placeholders/1280x960.png',
    },
    tags : ['HTML', 'CSS', 'JS']

  },
  {
    anchor : {
      anchorText : 'w3c.com',
      anchorLink : '#',
      imgSrc : 'https://bulma.io/images/placeholders/1280x960.png',
    },
    tags : ['HTML', 'CSS', 'JS']

  },
  {
    anchor : {
      anchorText : 'w3c.com',
      anchorLink : '#',
      imgSrc : 'https://bulma.io/images/placeholders/1280x960.png',
    },
    tags : ['HTML', 'CSS', 'JS']

  }
];
public educationContent = [
  {
    timeline : '2018(expected)',
    course : 'BE computer Science',
    school : 'VTU'
  },
  {
    timeline : '2018(expected)',
    course : 'BE computer Science',
    school : 'VTU'
  }
];
public contactMe = {
  header : 'Feel free to contact',
  mail : 'nandan.1345@gmail.com',
  links : [
    {
      target : '_blank',
      href : 'facebook.com/nandank93',
      class : 'fa fa-facebook'
    },
    {
      target : '_blank',
      href : 'facebook.com/nandank93',
      class : 'fa fa-twitter'
    }
  ]
};
  constructor() { }

  ngOnInit() {
    this.myParams = {
      'particles': {
        'number': {
          'value': 400,
          'density': {
            'enable': true,
            'value_area': 800
          }
        },
        'color': {
          'value': '#EDF5E1'
        },
        'shape': {
          'type': 'circle',
          'stroke': {
            'width': 0,
            'color': '#000000'
          },
          'polygon': {
            'nb_sides': 5
          },
          'image': {
            'src': 'img/github.svg',
            'width': 100,
            'height': 100
          }
        },
        'opacity': {
          'value': 0.5,
          'random': true,
          'anim': {
            'enable': false,
            'speed': 1,
            'opacity_min': 0.1,
            'sync': false
          }
        },
        'size': {
          'value': 10,
          'random': true,
          'anim': {
            'enable': false,
            'speed': 40,
            'size_min': 0.1,
            'sync': false
          }
        },
        'line_linked': {
          'enable': false,
          'distance': 500,
          'color': '#ffffff',
          'opacity': 0.4,
          'width': 2
        },
        'move': {
          'enable': true,
          'speed': 6,
          'direction': 'bottom',
          'random': false,
          'straight': false,
          'out_mode': 'out',
          'bounce': false,
          'attract': {
            'enable': false,
            'rotateX': 600,
            'rotateY': 1200
          }
        }
      },
      'interactivity': {
        'detect_on': 'canvas',
        'events': {
          'onhover': {
            'enable': true,
            'mode': 'bubble'
          },
          'onclick': {
            'enable': true,
            'mode': 'repulse'
          },
          'resize': true
        },
        'modes': {
          'grab': {
            'distance': 400,
            'line_linked': {
              'opacity': 0.5
            }
          },
          'bubble': {
            'distance': 400,
            'size': 4,
            'duration': 0.3,
            'opacity': 1,
            'speed': 3
          },
          'repulse': {
            'distance': 200,
            'duration': 0.4
          },
          'push': {
            'particles_nb': 4
          },
          'remove': {
            'particles_nb': 2
          }
        }
      },
      'retina_detect': true
    };
    }
}
