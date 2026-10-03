import type { CaseStudy } from './case-study'

export const caseStudies: Record<string, CaseStudy> = {
  'four-bar-ev-charging-arm': {
    slug: 'four-bar-ev-charging-arm', type: 'project', status: 'completed', title: 'Four-Bar EV Charging Arm', date: 'November 2025', role: 'Solo Project', summary: 'A compact linkage that deploys an EV-charging end-effector from a constrained enclosure to a defined target location.', tags: ['Mechanical design', 'MATLAB', 'Prototyping'],
    repository: 'https://github.com/NickSki17/Four-Bar-EV-Charging-Arm',
    videoAfterFirstFigure: true,
    metrics: [
      { label: 'Actuator torque reduction', value: '≈70%', basis: 'author-reported', note: 'Through linkage optimization.' },
      { label: 'Modeled trajectory error', value: '≤ 0.05 mm', basis: 'simulated', note: 'Calculated over a MATLAB motion sweep.' },
      { label: 'Prototype accuracy', value: '±2 mm', basis: 'measured' },
      { label: 'Prototype cycles', value: '5 consecutive cycles', basis: 'measured' },
      { label: 'Envelope / target', value: '400 × 450 × 500 mm / 152.4 mm at 240 mm', basis: 'requirement', note: 'The opening is 101.6 × 101.6 mm.' },
      { label: 'Servo rating', value: '≈4.8 kg·cm / 470 N·mm', basis: 'manufacturer-specification', note: 'Manufacturer rating, not a measured project result.' },
    ],
    sections: [
      { title: 'Problem', content: 'The mechanism had to move an end-effector through a 101.6 × 101.6 mm opening and reach a target 152.4 mm away at a 240 mm height inside a 400 × 450 × 500 mm frame.' },
      { title: 'Approach', content: 'A parameterized MATLAB kinematic model was optimized with fmincon. The design varied link geometry, placement, orientation, and end-effector length while enforcing geometry, clearance, transmission-angle, and modeled torque constraints.' },
      { title: 'Implementation and testing', content: 'The solo prototype used an Hitec HS-425BB servo, Arduino Uno, IR triggering, laser-cut MDF linkage parts, and a foam-core frame. The open-loop controller filters and debounces the IR input before commanding the servo.' },
      { title: 'Results and limits', content: 'The optimized model produced ≤0.05 mm trajectory error; prototype testing reported ±2 mm accuracy across five consecutive cycles. Required torque remained below the servo rating, with approximately 70% torque reduction through linkage optimization (author-reported).' },
    ],
    figures: [
      { src: '../assets/four-bar-physical-poster.jpg', alt: 'Assembled Four-Bar EV charging arm prototype with linkage and controller setup', caption: 'Physical Four-Bar prototype and controller setup.', kind: 'photo' },
      { src: '../assets/four-bar-trajectory.jpg', alt: 'MATLAB end-effector trajectory plot for the optimized four-bar mechanism', caption: 'Simulated end-effector trajectory from the MATLAB optimization; the target is marked by a cross.', kind: 'plot' },
      { src: '../assets/four-bar-arduino-setup.jpg', alt: 'Electronics and controller for the Four-Bar prototype', caption: 'Electronics and controller.', kind: 'photo' },
      { src: '../assets/four-bar-torque-plot-cropped.jpg', alt: 'Required servo torque plotted against input crank angle', caption: 'Simulated required servo torque across the input-crank sweep; the curves remain below the servo rating.', kind: 'plot' },
    ],
    videos: [
      { src: '../media/four-bar-simulation.mp4', poster: '../assets/four-bar-trajectory.jpg', title: 'Optimized mechanism motion', label: 'Simulation -' },
      { src: '../media/four-bar-physical-prototype.mp4', poster: '../assets/four-bar-physical-poster.jpg', title: 'Physical mechanism cycle', label: 'Prototype -' },
    ],
  },
  hexapod: {
    slug: 'hexapod', type: 'project', status: 'completed', title: 'Bio-Inspired Hexapod', date: 'December 2025', role: 'Solo Project', summary: 'A six-legged prototype built around an alternating tripod gait, passive leg mechanics, and open-loop Arduino servo control.', tags: ['Mechatronics', 'Embedded', 'Fabrication'],
    metrics: [
      { label: 'Walking benchmark', value: '0.24 m/s', basis: 'measured', note: 'Instructor-evaluated walking benchmark.' },
      { label: 'Normalized speed', value: '1.3 body lengths/s', basis: 'measured', note: 'Instructor-evaluated benchmark.' },
      { label: 'Traversal', value: '10 m trial', basis: 'user-attested', note: 'Timed by a professor.' },
    ],
    sections: [
      { title: 'Mechanism', content: 'The robot uses two alternating tripod groups, one servo-driven shoulder joint per leg, passive lower-leg mechanisms, elastic return assistance, and an MDF body.' },
      { title: 'Control', content: 'Arduino Uno firmware drives six servos with smooth interpolation, fixed timing, and alternating gait groups. The controller uses an open-loop tripod gait without ground-contact, IMU, or joint-position feedback.' },
      { title: 'Testing', content: 'An instructor-evaluated walking benchmark was 0.24 m/s, or 1.3 body lengths/s. A professor timed the completed 10 m trial.' },
      { title: 'Engineering limits', content: 'Mass, torque, and static factor-of-safety values are preliminary calculations rather than measured operating results.' },
    ],
    videoAfterFirstFigure: true,
    repository: 'https://github.com/NickSki17/Hexapod-Robot',
    figures: [
      { src: '../assets/hexapod-front.jpg', alt: 'Full view of the assembled hexapod robot, including its chassis and legs', caption: 'The complete physical robot, viewed from the front.', kind: 'photo' },
      { src: '../assets/hexapod-body.jpg', alt: 'Side view of the hexapod chassis, servos, and leg mechanisms', caption: 'Chassis and servo-driven leg mechanisms.', kind: 'photo' },
      { src: '../assets/hexapod-wiring.jpg', alt: 'Arduino Uno and wiring for the six hexapod servos', caption: 'Arduino controller and servo wiring.', kind: 'photo' },
    ],
    videos: [{ src: '../media/hexapod-walking.mp4', poster: '../assets/hexapod-walking-poster.jpg', title: 'Hexapod walking', label: 'Prototype -' }],
  },
  'sustainable-chair': {
    slug: 'sustainable-chair', type: 'project', status: 'completed', title: 'Sustainable Foam-Core Chair', date: 'September 2025', role: 'Solo Project', summary: 'An interlocking foam-core chair designed for lightweight fabrication without adhesives or mechanical fasteners.', tags: ['CAD', 'FEA', 'Testing'],
    metrics: [
      { label: 'CAD mass', value: '462 g', basis: 'estimated', note: 'CAD/material-density estimate, not a scale measurement.' },
      { label: 'Professor-performed human load test', value: '103 kg - passed', basis: 'measured', note: 'The chair passed the test; this is not a rated or certified capacity.' },
      { label: 'Failure sequence', value: 'Cracked at 70 kg; observed at 80 kg and 90 kg', basis: 'measured', note: 'Observed during incremental testing.' },
    ],
    sections: [
      { title: 'Constraints', content: 'The chair uses 5 mm foam-core sheets, laser-cut parts, and press-fit slots and tabs. The design avoids external adhesives, mechanical fasteners, and tape.' },
      { title: 'Analysis and iteration', content: 'Autodesk Inventor CAD and preliminary FEA assessed seat and backrest loading and identified stress concentrations. Fit checks and FEA informed small design tweaks before full-scale fabrication. CAD/material-density analysis estimates the chair mass at 462 g.' },
      { title: 'Physical observation', content: 'The approximately 70 kg load cracked the short, thin slats while the main structure remained intact. Similar cracking was observed at 80 kg and 90 kg. A professor sat on the chair for the 103 kg human load test, which it passed with little main-structure deformation; one outer leg bent slightly and additional slats broke. The test was not instrumented or certified.' },
    ],
    repository: 'https://github.com/NickSki17/Sustainable-Chair',
    figures: [
      { src: '../assets/chair-before-test-cropped.jpg', alt: 'Unloaded foam-core chair prototype before the incremental human load trial', caption: 'Physical prototype before incremental load testing.', kind: 'photo' },
      { src: '../assets/chair-after-test-cropped.jpg', alt: 'Foam-core chair prototype after the incremental human load trial', caption: 'Prototype after incremental human loading.', kind: 'photo' },
      { src: '../assets/chair-fea-seat.jpg', alt: 'Simulated stress contour on the sustainable chair seat structure', caption: 'Simulated stress distribution for the seat loading condition.', kind: 'plot' },
      { src: '../assets/chair-fea-back.jpg', alt: 'Simulated stress contour on the sustainable chair back structure', caption: 'Simulated stress distribution for the back loading condition.', kind: 'plot' },
    ],
  },
  'topology-optimization': {
    slug: 'topology-optimization', type: 'project', status: 'completed', title: 'FEA Topology Optimization', date: 'March 2026', role: 'Solo Project', summary: 'An ANSYS Workbench study of a minimum-cost polypropylene bracket using topology optimization, reconstruction, and mesh convergence.', tags: ['ANSYS', 'FEA', 'Optimization'],
    repository: 'https://github.com/NickSki17/Small-Projects-Public/tree/main/FEA-Topology-Optimization',
    metrics: [
      { label: 'Applied load', value: '150 lbf', basis: 'simulated', note: 'Total applied load in the simulated model.' },
      { label: 'Design points', value: '185', basis: 'simulated', note: 'Optimization study output.' },
      { label: 'Maximum y-deflection (2D)', value: '0.01477 in', basis: 'simulated', note: 'Primary analysis result.' },
      { label: 'Stress / FoS', value: '332.02 psi / 15.3', basis: 'simulated', note: 'Simulated maximum stress and factor of safety.' },
    ],
    sections: [
      { title: 'Individual contribution', content: 'I completed the ANSYS topology optimization, geometry reconstruction, and mesh-convergence verification.' },
      { title: 'Problem and method', content: 'The study evaluated a minimum-cost polypropylene bracket with ANSYS Workbench 2025 R2. The workflow included topology optimization, geometry reconstruction, and mesh-convergence verification.' },
      { title: 'Results', content: 'The primary 2D analysis returned a maximum y-deflection of 0.01477 in under a 150 lbf load. Across 185 design points, the maximum stress was 332.02 psi with a factor of safety of 15.3. These are simulated FEA results.' },
    ],
    figures: [
      { src: '../assets/topology-result.jpg', alt: 'Topology optimization density distribution and reconstructed bracket geometry', caption: 'Simulated topology result and reconstructed parametric geometry.', kind: 'plot' },
      { src: '../assets/topology-stress.jpg', alt: 'Simulated von Mises stress contour on the reconstructed topology bracket', caption: 'Simulated von Mises stress contour; maximum stress is 332.02 psi with a factor of safety of 15.3.', kind: 'plot' },
      { src: '../assets/topology-convergence.jpg', alt: 'Mesh-convergence graphs of maximum total deformation and maximum equivalent stress versus node count', caption: 'Mesh convergence: maximum total deformation and maximum equivalent stress versus node count.', kind: 'plot' },
      { src: '../assets/topology-boundary.jpg', alt: 'ANSYS boundary condition setup for the topology optimization bracket', caption: 'Simulated boundary-condition setup for the 150 lbf total-load case.', kind: 'screenshot' },
    ],
  },
  'bladed-disk-optimization': {
    slug: 'bladed-disk-optimization', type: 'project', status: 'completed', title: 'Bladed-Disk Optimization', date: 'May 2026', role: 'Solo Project', summary: 'A rotating-component study using cyclic-symmetry FEA, mesh convergence, and prestressed modal analysis in ANSYS Workbench.', tags: ['CAE', 'Rotordynamics', 'FEA'],
    repository: 'https://github.com/NickSki17/Small-Projects-Public/tree/main/FEA-Bladed-Disk-Optimization',
    metrics: [
      { label: 'Operating case', value: '4,500 RPM', basis: 'simulated', note: 'Design analysis case.' },
      { label: 'Stress / FoS', value: '16,511 psi / 2.12', basis: 'simulated', note: 'Maximum stress and factor of safety.' },
      { label: 'Assembly mass', value: '28.27 lb', basis: 'calculated', note: 'Calculated from the modeled sector/assembly.' },
      { label: 'Reference failure case', value: '9,000 RPM', basis: 'simulated', note: 'Reference/failure case; not a successful operating point.' },
    ],
    sections: [
      { title: 'Individual contribution', content: 'I performed the cyclic-symmetry FEA, mesh-convergence study, and prestressed modal analysis.' },
      { title: 'Approach', content: 'The study analyzed a 24-blade aluminum bladed disk using ANSYS Workbench, cyclic-symmetry FEA, mesh convergence, and prestressed modal analysis.' },
      { title: 'Results', content: 'At 4,500 RPM, FEA returned 16,511 psi maximum stress, a factor of safety of 2.12, and 0.014983 in radial tip deflection. The modeled assembly mass is 28.27 lb.' },
      { title: 'Limitations', content: 'The 9,000 RPM case is a failure/reference case; 4,500 RPM is the design case.' },
    ],
    figures: [
      { src: '../assets/bladed-disk-geometry-cropped.jpg', alt: 'ANSYS DesignModeler geometry for the bladed-disk sector', caption: 'Sector geometry representing one twenty-fourth of the full assembly.', kind: 'cad' },
      { src: '../assets/bladed-disk-radial-result-cropped.jpg', alt: 'Simulated radial tip deflection contour at 4,500 RPM', caption: 'Simulated radial tip deflection at 4,500 RPM.', kind: 'plot' },
      { src: '../assets/bladed-disk-9000rpm-reference-cropped.jpg', alt: 'Simulated bladed-disk stress contour for the 9,000 RPM reference case', caption: 'Simulated 9,000 RPM reference/failure case; sustained operation is explicitly not intended.', kind: 'plot' },
    ],
  },
  'cnc-bracket': {
    slug: 'cnc-bracket', type: 'project', status: 'completed', title: 'CNC Bracket Design', date: 'October 2025', role: 'Solo Project', summary: 'A comparative P1/P2 bracket study combining SolidWorks modeling, static FEA, drawing release, fixturing documentation, and Mastercam toolpath simulation.', tags: ['SolidWorks', 'FEA', 'CAM'],
    repository: 'https://github.com/NickSki17/Small-Projects-Public/tree/main/CNC-Bracket-Design',
    metrics: [
      { label: 'Material / load', value: '6061-T6 aluminum / 500 lbf', basis: 'requirement', note: 'Static FEA setup.' },
      { label: 'P1 stress / FoS', value: '482 MPa / 0.571', basis: 'simulated', note: 'SolidWorks Simulation result.' },
      { label: 'P2 stress / FoS', value: '152 MPa / 1.81', basis: 'simulated', note: 'SolidWorks Simulation result.' },
    ],
    sections: [
      { title: 'Design comparison', content: 'Student work modeled the provided P1 and P2 blueprints in SolidWorks, then compared their static response under a 500 lbf load with fixed 0.875 in and 0.250 in through-holes. P2 is the revision to the blueprint-based P1.' },
      { title: 'Manufacturing planning', content: 'The workflow covers soft-jaw fixturing, a 3.75 × 3.00 × 1.00 in stock setup, and Mastercam Color Loop toolpath verification.' },
      { title: 'Results', content: 'Static FEA returned P1/P2 maximum stresses of 482/152 MPa and minimum factors of safety of 0.571/1.81.' },
    ],
    figures: [
      { src: '../assets/cnc-bracket-fea-comparison.jpg', alt: 'SolidWorks Simulation stress contours comparing CNC bracket P1 and P2 variants', caption: 'Simulated P1/P2 comparison for bracket variants modeled from provided blueprints.', kind: 'plot' },
      { src: '../assets/cnc-bracket-toolpath.jpg', alt: 'Mastercam toolpath simulation for the CNC bracket operation', caption: 'Mastercam toolpath simulation for the CNC manufacturing workflow.', kind: 'screenshot' },
    ],
  },
  'arbor-press': {
    slug: 'arbor-press', type: 'project', status: 'completed', title: 'Arbor Press Design', date: 'November 2025', role: 'Solo Project', summary: 'An iterative arbor-press frame study spanning CAD revisions, static FEA, engineering drawings, mold work, and Mastercam programming.', tags: ['SolidWorks', 'FEA', 'Manufacturing'],
    repository: 'https://github.com/NickSki17/Small-Projects-Public/tree/main/Arbor-Press-Design',
    metrics: [
      { label: 'Load case', value: '3 ton', basis: 'requirement', note: 'Static FEA setup.' },
      { label: 'Maximum stress, P1 → P4', value: '301.1 → 346 → 311.4 → 188.7 MPa', basis: 'simulated', note: 'SolidWorks Simulation results.' },
    ],
    sections: [
      { title: 'Design evolution', content: 'P1 is a provided baseline; P2–P4 are my revisions, including a cast-style design, a machining-oriented design, and a P4 revision using earlier FEA to reinforce high-stress regions.' },
      { title: 'Analysis and manufacturing', content: 'SolidWorks static FEA used a 3-ton load, a fixed flat bottom surface, default solid meshing, and selected materials. Native drawings, a P2 mold assembly, and Mastercam toolpath verification support the design and manufacturing-planning workflow.' },
      { title: 'Limits', content: 'Stress values are simulated; the project focused on manufacturing planning rather than physical load testing.' },
    ],
    figures: [
      { src: '../assets/arbor-press-p2-p3-cropped.jpg', alt: 'CAD revision sequence showing Arbor Press revisions P2 through P4', caption: 'CAD revision progression; P1 is a provided baseline, and P2–P4 are my revisions.', kind: 'cad' },
      { src: '../assets/arbor-press-p4-cropped.jpg', alt: 'CAD render of the Arbor Press P4 revision', caption: 'P4 revision developed from earlier FEA to reinforce high-stress regions; it was not physically load-tested.', kind: 'cad' },
      { src: '../assets/arbor-press-fea-p4.jpg', alt: 'Simulated von Mises stress distribution and legend for the Arbor Press P4 revision, with a maximum of 188.7 MPa', caption: 'P4 simulated von Mises stress result from the Arbor Press report.', kind: 'plot' },
      { src: '../assets/arbor-press-mastercam-toolpath.jpg', alt: 'Mastercam Color Loop toolpath simulation for an Arbor Press machining operation', caption: 'Mastercam Color Loop toolpath simulation from the Arbor Press programming workflow.', kind: 'screenshot' },
    ],
  },
  'robotic-arm': {
    slug: 'robotic-arm', type: 'project', status: 'in-progress', title: '6-DOF Robotic Arm', date: 'January 2026 – present', role: 'Collaborative project - selected contributions by Nicholas Skiba', summary: 'A collaborative robotics platform with selected contributions in embedded diagnostics, serial testing, development-environment documentation, ROS 2 scaffolding, and reduced simulation.', tags: ['Embedded', 'ROS 2', 'Python'],
    repository: 'https://github.com/ZachSkiba/Robot',
    repositoryLabel: 'Repository ↗',
    sections: [
      { title: 'Project status', content: 'An early-stage six-degree-of-freedom arm platform with planning complete and simulation beginning; hardware integration and full control remain planned.' },
      { title: 'Implemented contributions', content: 'My contributions included Teensy 4.1 diagnostics and serial benchmarks through PlatformIO, Python serial tests, Docker/WSL/Dev Container setup documentation, and ROS 2 scaffolding. The implemented reduced simulation is a 2-link/mock-motor model.' },
      { title: 'Planned work', content: 'Full six-joint control, motor firmware, sensor drivers, URDF/Xacro, and six-DOF simulation remain planned.' },
    ],
  },
  'physics-surrogate-optimization': {
    slug: 'physics-surrogate-optimization', type: 'project', status: 'in-progress', title: 'Physics Surrogate + Optimization', date: 'September 2026 – present', summary: 'A computational mechanics scaffold for a 3-DOF mass-spring-damper model, modal analysis, and later surrogate optimization.', tags: ['Python', 'Dynamics', 'Optimization'],
    repository: 'https://github.com/NickSki17/Small-Projects-Public/tree/main/Computational-Methods',
    sections: [
      { title: 'Current status', content: 'Partially implemented. The foundation is a 3-DOF mass-spring-damper formulation with system matrices and modal analysis.' },
      { title: 'Implemented', content: 'The dynamics and modal modules provide the physical-model foundation. The project is structured around engineering response metrics and validation before higher-level optimization.' },
      { title: 'Planned work', content: 'Dataset generation, a surrogate MLP, SLSQP design optimization, PPO, PID comparison, and performance results remain planned.' },
    ],
  },
  'progress-rail': {
    slug: 'progress-rail', type: 'experience', status: 'completed', title: 'Progress Rail', organization: 'Progress Rail, a Caterpillar Company', date: 'May 2026 – August 2026', role: 'Engine Controls Engineering Intern', summary: 'Repeatable characterization and system validation for locomotive-control pressure sensors, integrating test hardware, instrumentation, and data analysis.', tags: ['Validation', 'Instrumentation', 'Calibration'],
    supportingWorkUrl: 'https://github.com/NickSki17/Professional/blob/main/Experience/Progress-Rail.md',
    sections: [
      { title: 'Scope', content: 'Work centered on six locomotive-control pressure sensors.' },
      { title: 'Validation work', content: 'Built a repeatable test framework, assembled sensor harnesses, verified continuity, grounding, and pinouts, and integrated pressure calibrators and laboratory instrumentation.' },
      { title: 'Analysis and system validation', content: 'Used Python and Excel to evaluate transfer curves, linearity, accuracy, repeatability, operating range, and sensor-to-sensor consistency through regression, calibration, and interpolation. Vector CANape and CAT ET supported system-level diagnostics and fault-response validation.' },
    ],
  },
  'deep-coat': {
    slug: 'deep-coat', type: 'experience', status: 'completed', title: 'Deep Coat Industries', organization: 'Deep Coat Industries', date: 'May 2025 – August 2025; December 2025 – January 2026', role: 'Engineering Intern', summary: 'Internship work across RF/EMI test-system design, instrumentation, Python data automation, shielding analysis, and fixture/mechanism design and fabrication.', tags: ['RF / EMI', 'Instrumentation', 'Mechanical design'],
    supportingWorkUrl: 'https://github.com/NickSki17/Professional/blob/main/Experience/Deep-Coat.md',
    metrics: [{ label: 'Measurement range', value: '500 Hz – 6.3 GHz', basis: 'author-reported', note: 'RF/EMI test-system measurements.' }],
    sections: [
      { title: 'RF/EMI test systems', content: 'Designed, built, and validated an RF/EMI test system for physical measurements from 500 Hz to 6.3 GHz, using antennas, a VNA, oscilloscopes, and RF amplifiers.' },
      { title: 'Computational shielding model', content: 'Developed a Python-based multilayer shielding-effectiveness model spanning approximately 1 Hz to 100 GHz computationally, cross-checked against independent formulations and limiting behavior.' },
      { title: 'Analysis and fabrication', content: 'Automated instrument control and data processing in Python; designed AutoCAD fixtures and mechanisms, including a 90-degree rotary mechanism, and supported hands-on fabrication.' },
    ],
  },
  fsae: {
    slug: 'fsae', type: 'experience', status: 'in-progress', title: 'Formula SAE Chassis Design', organization: 'Illinois Institute of Technology', date: 'August 2026 – present', role: 'Mechanical design contributor', summary: 'Current chassis and monocoque design work for an FSAE program, with rule-driven packaging and structural validation planned.', tags: ['SolidWorks', 'Vehicle structures', 'Packaging'],
    supportingWorkUrl: 'https://github.com/NickSki17/Professional/blob/main/Experience/Formula-SAE.md',
    sections: [
      { title: 'Current work', content: 'Current work includes SolidWorks chassis and monocoque design for the front bulkhead, front hoop, side-impact structure, and driver packaging.' },
      { title: 'Constraints', content: 'The design work follows FSAE rules and the Percy template. These requirements shape structural layout and driver packaging decisions.' },
      { title: 'Planned validation', content: 'ANSYS structural validation is planned for a future design phase.' },
    ],
  },
  'triple-threat-services': {
    slug: 'triple-threat-services', type: 'experience', status: 'in-progress', title: 'Business Owner & Co-Founder', organization: 'Triple Threat Services', date: 'May 2024 – Present', role: 'Business Owner & Co-Founder', summary: 'Co-founded and operate a customer-focused mobile automotive detailing business with my brothers, managing customer relationships, business operations, and service delivery.',
    repository: 'https://www.triplethreatservices.com/',
    repositoryLabel: 'Visit Triple Threat Services ↗',
    tags: ['Business operations', 'Customer service', 'Entrepreneurship'],
    sections: [
      { title: 'Business operations', content: 'Involved in customer acquisition, scheduling, marketing, pricing, purchasing, financial tracking, customer communication, and mobile interior and exterior detailing. Helped establish repeatable service procedures while managing day-to-day operations and customer satisfaction.' },
    ],
  },
}
