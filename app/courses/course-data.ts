export type Course = {
  slug: string;
  title: string;
  eyebrow: string;
  audience: string;
  intro: string;
  description: string;
  highlights: string[];
  idealFor: string[];
  credential: string;
  metaTitle: string;
  metaDescription: string;
};

export const courses: Record<string, Course> = {
  "bls-provider": {
    slug: "bls-provider",
    title: "BLS Provider",
    eyebrow: "For healthcare professionals",
    audience: "Healthcare professionals and clinical teams",
    intro: "Build the CPR and team-response skills healthcare professionals need when seconds matter.",
    description: "Our BLS Provider training emphasizes high-quality CPR, rapid AED use, effective ventilations, choking relief, and coordinated team response. FirstHand instructors bring real emergency-response experience into the classroom so the skills connect to what happens outside the textbook.",
    highlights: ["High-quality adult, child, and infant CPR", "AED use and rapid defibrillation", "Effective ventilations and airway support", "Relief of choking", "Team dynamics and coordinated response"],
    idealFor: ["Nurses and nursing students", "Physicians and medical staff", "EMTs and paramedics", "Dental professionals", "Allied health professionals", "Healthcare students and clinical staff"],
    credential: "Certification is provided after successful completion of all applicable course requirements.",
    metaTitle: "BLS Provider Training in Knoxville, TN | FirstHand CPR Training",
    metaDescription: "BLS Provider training for healthcare professionals in Knoxville and East Tennessee, taught by firefighters, paramedics, and EMTs with real emergency experience.",
  },
  "heartsaver-cpr-aed": {
    slug: "heartsaver-cpr-aed",
    title: "Heartsaver CPR AED",
    eyebrow: "For workplaces & community",
    audience: "Businesses, organizations, and community members",
    intro: "Learn how to recognize cardiac arrest, start effective CPR, and use an AED with confidence.",
    description: "Heartsaver CPR AED training is built for people who may be first on scene before professional responders arrive. We focus on practical repetition, clear decision-making, and hands-on skills for adult, child, and infant emergencies.",
    highlights: ["Adult, child, and infant CPR", "Hands-on AED practice", "Recognition of cardiac arrest", "Relief of choking", "Practical response steps before EMS arrives"],
    idealFor: ["Businesses and workplaces", "Schools and churches", "Fitness professionals", "Coaches and community groups", "Childcare staff", "Anyone who wants practical CPR and AED skills"],
    credential: "Eligible students receive course certification after successfully completing all applicable requirements.",
    metaTitle: "CPR & AED Training in Knoxville, TN | FirstHand CPR Training",
    metaDescription: "Hands-on Heartsaver CPR and AED training in Knoxville and East Tennessee for workplaces, organizations, and community members.",
  },
  "first-aid": {
    slug: "first-aid",
    title: "First Aid",
    eyebrow: "For everyday responders",
    audience: "Workplaces, organizations, and community members",
    intro: "Be ready to provide practical first aid during the minutes before professional help arrives.",
    description: "FirstHand First Aid training focuses on recognizing common medical emergencies and injuries, taking sensible first steps, and communicating effectively when EMS is needed. Our instructors connect classroom skills to situations they have encountered throughout their emergency-response careers.",
    highlights: ["Recognition of common medical emergencies", "Bleeding and injury care", "Initial response to sudden illness", "Scene safety and emergency action", "Knowing when and how to activate EMS"],
    idealFor: ["Businesses and workplaces", "Schools and childcare organizations", "Churches and community groups", "Fitness facilities and coaches", "Parents and caregivers", "Anyone who wants stronger emergency-response skills"],
    credential: "Certification is provided for eligible courses after successful completion of applicable requirements.",
    metaTitle: "First Aid Training in Knoxville, TN | FirstHand CPR Training",
    metaDescription: "Practical First Aid training in Knoxville and East Tennessee taught by firefighters, paramedics, and EMTs with firsthand emergency experience.",
  },
};
