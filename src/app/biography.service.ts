import { Injectable } from '@angular/core';

@Injectable()
export class BiographyService {

  getBiography(): Object[] {
    return [
      {year: 1992, event: "Born", info: "Connor Chan is born."},
      {year: 2010, event: "High School Graduation", info: "Connor graduates from Beverly High School. He then begins his undergraduate career at Hofstra University on Long Island, planning to major in English Literature."},
      {year: 2012, event: "College Transfer", info: "Connor leaves Hofstra to attend Connecticut College in New London, CT. Here, he continues studying English Literature while also pursuing a minor in Computer Science. Coursework for the CS program included \"Introduction to Computer Science and Problem Solving,\" \"Data Structures,\" \"Multimedia,\" \"Database Systems,\" and \"Computer Organization.\""},
      {year: 2013, event: "Semester Abroad", info: "Connor spends a semester studying in Perugia, Italy. Coursework included an intensive introductory Italian course, as well as courses in literature and history. Countries visited included Spain, The Netherlands, The Czech Republic, Austria, and more."},
      {year: 2014, event: "Introduction to Digital Marketing", info: "Connor begins an internship at The Marketing Zen Group (now Zen Media), focusing on SEO and content marketing. Responsibilities included meta tag optimization, content audits, blogging, and other related tasks."},
      {year: 2015, event: "First Job at UpWord Search Marketing", info: "Connor starts working at an SEO & PPC agency in downtown Boston called UpWord Search Marketing. In early 2016, UpWord is acquired by BusinessOnline. Tasks included data collection and analysis, content creation, managing PPC campaigns, creating reports, assisting on client calls, and more. While at UpWord, Connor also pursues online coursework in CS-related topics and web development."},
      {year: 2016, event: "Wayfair Labs", info: "Connor participates in a paid program at Wayfair, which gives valuable industry experience to entry-level software engineers. Tech stack included Wayfair's homegrown PHP and JavaScript frameworks, HTML/CSS, Git, and more."},
      {year: 2016, event: "Evergage", info: "Connor enters the world of SaaS by accepting a Personalization Developer role at Evergage. This position entails implementing Evergage on client websites and apps, customizing integrations, building web personalization campaigns using front-end web dev technologies alongside the Evergage platform, participating in client support, and supporting the Customer Success and Sales teams. Interested in seeing some of this work? Visit http://www.evergage.com/customers-2/ and pick a name. Chances are, there is something live on that site that Connor had involvement in building."},
      {year: 2018, event: "Team Lead", info: "Connor begins helping to lead Evergage's client ops team as a senior-level solutions engineer, specifically helping to implement best practices and training for web campaign development."}
    ];
  }

}
