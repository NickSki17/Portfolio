import type { CaseStudy } from './case-study'

export const caseStudies: Record<string, CaseStudy> = {
  'four-bar-ev-charging-arm': {
    slug: 'four-bar-ev-charging-arm', type: 'project', status: 'completed', title: 'Four-Bar EV Charging Arm', date: 'November 2025', role: 'Solo project', summary: 'A compact linkage that deploys an EV-charging end-effector from a constrained enclosure to a defined target location.', tags: ['Mechanical design', 'MATLAB', 'Prototyping'], confidentiality: 'Public project evidence',
    metrics: [
      { label: 'Optimization', value: '70% torque reduction', basis: 'resume-attested', note: 'Resume-attested; baseline and optimized torque values are not reported.' },
      { label: 'Modeled trajectory error', value: '≤ 0.05 mm', basis: 'simulated', note: 'Calculated over a MATLAB motion sweep.' },
      { label: 'Prototype accuracy', value: '±2 mm', basis: 'measured', note: 'Experimental result; method and instrumentation are unspecified.' },
      { label: 'Prototype cycles', value: '5 consecutive cycles', basis: 'measured', note: 'Five-cycle result; another project table lists 10+ cycles.' },
      { label: 'Envelope / target', value: '400 × 450 × 500 mm / 152.4 mm at 240 mm', basis: 'requirement', note: 'The opening is 101.6 × 101.6 mm.' },
      { label: 'Servo rating', value: '≈4.8 kg·cm / 470 N·mm', basis: 'manufacturer-specification', note: 'Specification as reported by the design report, not a project result.' },
    ],
    sections: [
      { title: 'Problem', content: 'The mechanism had to move an end-effector through a 101.6 × 101.6 mm opening and reach a target 152.4 mm away at a 240 mm height inside a 400 × 450 × 500 mm frame.' },
      { title: 'Approach', content: 'A parameterized MATLAB kinematic model was optimized with fmincon using SQP. The design varied link geometry, placement, orientation, and end-effector length while enforcing geometry, clearance, transmission-angle, and modeled torque constraints.' },
      { title: 'Implementation and testing', content: 'The solo prototype used an Hitec HS-425BB servo, Arduino Uno, IR triggering, laser-cut MDF linkage parts, and a foam-core frame. The open-loop controller filters and debounces the IR input before commanding the servo.' },
      { title: 'Results and limits', content: 'The optimized model produced ≤0.05 mm trajectory error; prototype testing reported ±2 mm accuracy across five consecutive cycles. Required torque remained below the servo rating, while the 70% reduction is resume-attested.' },
    ],
    figures: [
      { src: '../assets/four-bar-trajectory.jpg', alt: 'MATLAB end-effector trajectory plot for the optimized four-bar mechanism', caption: 'Simulated end-effector trajectory from the MATLAB optimization; the target is marked by a cross.', kind: 'plot' },
      { src: '../assets/four-bar-free-body.jpg', alt: 'Free-body diagrams for the four-bar linkage links', caption: 'Calculated free-body diagrams used to reason about link forces and torque.', kind: 'diagram' },
      { src: '../assets/four-bar-arduino-setup.jpg', alt: 'Arduino, IR receiver, and servo setup for the four-bar prototype', caption: 'Physical prototype controller and actuator setup.', kind: 'photo' },
      { src: '../assets/four-bar-torque-plot.jpg', alt: 'Required servo torque plotted against input crank angle', caption: 'Simulated required servo torque versus input crank angle; the curves remain below the servo rating in the documented analysis.', kind: 'plot' },
    ],
    videos: [
      { src: '../media/four-bar-simulation.mp4', poster: '../assets/four-bar-trajectory.jpg', title: 'Optimized mechanism motion', label: 'Simulation —' },
      { src: '../media/four-bar-physical-prototype.mp4', poster: '../assets/four-bar-physical-poster.jpg', title: 'Physical mechanism cycle', label: 'Prototype —' },
    ],
  },
  hexapod: {
    slug: 'hexapod', type: 'project', status: 'completed', title: 'Bio-Inspired Hexapod', date: 'December 2025', role: 'Solo project', summary: 'A six-legged prototype built around an alternating tripod gait, passive leg mechanics, and open-loop Arduino servo control.', tags: ['Mechatronics', 'Embedded', 'Fabrication'], confidentiality: 'Public project evidence',
    metrics: [
      { label: 'Walking benchmark', value: '0.24 m/s', basis: 'measured', note: 'Instructor-evaluated benchmark reported by the project documentation.' },
      { label: 'Normalized speed', value: '1.3 body lengths/s', basis: 'measured', note: 'Instructor-evaluated benchmark reported by the project documentation.' },
      { label: 'Traversal', value: '10 m trial', basis: 'user-attested', note: 'Completed trial timed by a professor with a stopwatch; no trial time is displayed or calculated.' },
      { label: 'Actuation', value: '6 servos / Arduino Uno', basis: 'calculated', note: 'Hardware and firmware configuration documented by the project; not a performance result.' },
    ],
    sections: [
      { title: 'Mechanism', content: 'The robot uses two alternating tripod groups, one servo-driven shoulder joint per leg, passive lower-leg mechanisms, elastic return assistance, and an MDF body with 3D-printed components.' },
      { title: 'Control', content: 'Arduino firmware drives six servos with smooth interpolation, fixed timing, and alternating gait groups. The controller is open-loop: no ground-contact, IMU, or joint-position feedback is documented.' },
      { title: 'Testing', content: 'An instructor-evaluated benchmark is reported at approximately 0.24 m/s, or 1.3 body lengths/s. A completed 10 m trial was timed by a professor with a stopwatch; the trial duration is intentionally not reported.' },
      { title: 'Engineering limits', content: 'The open-loop design uses simplified calculations for preliminary mass, torque, and static factor of safety rather than measured operating results.' },
    ],
    figures: [
      { src: '../assets/hexapod-body.jpg', alt: 'Hexapod chassis and servo layout', caption: 'Allowed project asset: chassis and servo layout.', kind: 'photo' },
      { src: '../assets/hexapod-wiring.jpg', alt: 'Arduino and power wiring in the hexapod prototype', caption: 'Allowed project asset: electronics and wiring.', kind: 'photo' },
    ],
    videos: [{ src: '../media/hexapod-walking.mp4', poster: '../assets/hexapod-walking-poster.jpg', title: 'Hexapod walking', label: 'Prototype —' }],
  },
  'sustainable-chair': {
    slug: 'sustainable-chair', type: 'project', status: 'completed', title: 'Sustainable Foam-Core Chair', date: '2025', role: 'Solo project', summary: 'An interlocking foam-core chair designed for lightweight fabrication without adhesives or mechanical fasteners.', tags: ['CAD', 'FEA', 'Testing'], confidentiality: 'Public project evidence',
    metrics: [
      { label: 'Design load', value: '103 kg', basis: 'requirement', note: 'Design requirement; the load trial was not instrumented or certified.' },
      { label: 'CAD mass', value: '462 g', basis: 'estimated', note: 'Inventor/material-density estimate, not a physical scale measurement.' },
      { label: 'Incremental load trial', value: '103 kg observed', basis: 'measured', note: 'Human load trial with little observed deformation; not instrumented or certified.' },
      { label: 'Failure sequence', value: 'Cracked at 70 kg; observed at 80 kg and 90 kg', basis: 'measured', note: 'Incremental physical observation documented in the report.' },
    ],
    sections: [
      { title: 'Constraints', content: 'The chair uses 5 mm foam-core sheets, laser-cut parts, and press-fit slots and tabs. The design avoids external adhesives, mechanical fasteners, and tape.' },
      { title: 'Analysis and iteration', content: 'Autodesk Inventor CAD and preliminary FEA were used for seat and backrest loading conditions. The CAD mass estimate was corrected from an earlier 788 g estimate to 462 g after correcting the material density.' },
      { title: 'Physical observation', content: 'Incremental human loading produced cracking at 70 kg, followed by observed loading at 80 kg and 90 kg. A later 103 kg incremental human load trial showed little observed deformation; it was not instrumented or certified.' },
    ],
    figures: [
      { src: '../assets/chair-before-test.jpg', alt: 'Unloaded foam-core chair prototype before the incremental human load trial', caption: 'Physical prototype before the documented incremental load trial.', kind: 'photo' },
      { src: '../assets/chair-after-test.jpg', alt: 'Foam-core chair prototype after the incremental human load trial', caption: 'Physical prototype after the incremental human load trial; observation only, not an instrumented or certified test.', kind: 'photo' },
      { src: '../assets/chair-fea-seat.jpg', alt: 'Simulated stress contour on the sustainable chair seat structure', caption: 'Simulated stress distribution for the documented seat loading condition.', kind: 'plot' },
      { src: '../assets/chair-fea-back.jpg', alt: 'Simulated stress contour on the sustainable chair back structure', caption: 'Simulated stress distribution for the documented back loading condition.', kind: 'plot' },
    ],
  },
  'topology-optimization': {
    slug: 'topology-optimization', type: 'project', status: 'completed', title: 'FEA Topology Optimization', date: '2025', role: 'Unknown', summary: 'An ANSYS Workbench study of a minimum-cost polypropylene bracket using topology optimization, reconstruction, and mesh convergence.', tags: ['ANSYS', 'FEA', 'Optimization'], confidentiality: 'Public project evidence',
    metrics: [
      { label: 'Applied load', value: '150 lbf', basis: 'simulated', note: 'Total load in the report model.' },
      { label: 'Design points', value: '185', basis: 'simulated', note: 'Optimization study output.' },
      { label: 'Primary deflection', value: '0.01477 in', basis: 'simulated', note: 'Reported FEA result.' },
      { label: 'Stress / FoS', value: '332.02 psi / 15.3', basis: 'simulated', note: 'Reported FEA results.' },
    ],
    sections: [
      { title: 'Problem and method', content: 'The study evaluated a minimum-cost polypropylene bracket with ANSYS Workbench 2025 R2. The workflow included topology optimization, geometry reconstruction, and mesh-convergence verification.' },
      { title: 'Results', content: 'The report documents 185 design points, a 150 lbf total load, 0.01477 in primary deflection, 332.02 psi stress, and a reported factor of safety of 15.3. These are simulated FEA results, not physical measurements.' },
      { title: 'Scope', content: 'The study is presented as a report-backed ANSYS workflow; the result figures show topology reconstruction, stress, and mesh convergence.' },
    ],
    figures: [
      { src: '../assets/topology-boundary.jpg', alt: 'ANSYS boundary condition setup for the topology optimization bracket', caption: 'Simulated boundary-condition setup for the documented 150 lbf total load study.', kind: 'screenshot' },
      { src: '../assets/topology-result.jpg', alt: 'Topology optimization density distribution and reconstructed bracket geometry', caption: 'Simulated topology result and reconstructed parametric geometry.', kind: 'plot' },
      { src: '../assets/topology-stress.jpg', alt: 'Simulated von Mises stress contour on the reconstructed topology bracket', caption: 'Simulated von Mises stress contour; the documented result is 332.02 psi with a factor of safety of 15.3.', kind: 'plot' },
      { src: '../assets/topology-convergence.jpg', alt: 'Mesh convergence plots and final finite-element mesh for the topology bracket', caption: 'Simulated mesh-convergence study and final mesh used for verification.', kind: 'plot' },
    ],
  },
  'bladed-disk-optimization': {
    slug: 'bladed-disk-optimization', type: 'project', status: 'completed', title: 'Bladed-Disk Optimization', date: '2025', role: 'Unknown', summary: 'A rotating-component study using cyclic-symmetry FEA, mesh convergence, and prestressed modal analysis in ANSYS Workbench.', tags: ['CAE', 'Rotordynamics', 'FEA'], confidentiality: 'Public project evidence',
    metrics: [
      { label: 'Operating case', value: '4,500 RPM', basis: 'simulated', note: 'Documented analysis case.' },
      { label: 'Stress / FoS', value: '16,511 psi / 2.12', basis: 'simulated', note: 'Reported FEA results.' },
      { label: 'Assembly mass', value: '28.27 lb', basis: 'calculated', note: 'Calculated from the modeled sector/assembly.' },
      { label: 'Reference failure case', value: '9,000 RPM', basis: 'simulated', note: 'Reference/failure case; not a successful operating point.' },
    ],
    sections: [
      { title: 'Approach', content: 'The study analyzed a 24-blade aluminum bladed disk using ANSYS Workbench, cyclic-symmetry FEA, mesh convergence, and prestressed modal analysis.' },
      { title: 'Results', content: 'At the documented 4,500 RPM case, the report gives 16,511 psi stress, a factor of safety of 2.12, 0.014983 in radial tip deflection, and 28.27 lb modeled assembly mass.' },
      { title: 'Limitations', content: 'The 9,000 RPM case is a failure/reference case; the 4,500 RPM result is the documented design case.' },
    ],
    figures: [
      { src: '../assets/bladed-disk-geometry.jpg', alt: 'ANSYS DesignModeler geometry for the bladed-disk sector', caption: 'Simulated sector geometry representing one twenty-fourth of the full assembly.', kind: 'cad' },
      { src: '../assets/bladed-disk-radial-result.jpg', alt: 'Simulated radial tip deflection contour at 4,500 RPM', caption: 'Simulated radial tip deflection at the documented 4,500 RPM case.', kind: 'plot' },
      { src: '../assets/bladed-disk-9000rpm-reference.jpg', alt: 'Simulated bladed-disk stress contour for the 9,000 RPM reference case', caption: 'Simulated 9,000 RPM reference/failure case; sustained operation is explicitly not intended.', kind: 'plot' },
    ],
  },
  'cnc-bracket': {
    slug: 'cnc-bracket', type: 'project', status: 'completed', title: 'CNC Bracket Design', date: '2025', role: 'Unknown', summary: 'A comparative P1/P2 bracket study combining SolidWorks modeling, static FEA, drawing release, fixturing documentation, and Mastercam toolpath simulation.', tags: ['SolidWorks', 'FEA', 'CAM'], confidentiality: 'Public project evidence',
    metrics: [
      { label: 'Material / load', value: '6061-T6 aluminum / 500 lbf', basis: 'requirement', note: 'Documented static-study setup.' },
      { label: 'P1 stress / FoS', value: '482 MPa / 0.571', basis: 'simulated', note: 'SolidWorks Simulation result.' },
      { label: 'P2 stress / FoS', value: '152 MPa / 1.81', basis: 'simulated', note: 'SolidWorks Simulation result.' },
    ],
    sections: [
      { title: 'Design comparison', content: 'P1 and P2 were modeled in SolidWorks from provided blueprints. The report compares their static response under a 500 lbf load with fixed 0.875 in and 0.250 in through-holes.' },
      { title: 'Manufacturing planning', content: 'The workflow covers soft-jaw fixturing, a 3.75 × 3.00 × 1.00 in stock setup, and Mastercam Color Loop toolpath verification.' },
      { title: 'Results', content: 'The report gives P1/P2 maximum stresses of 482/152 MPa and minimum factors of safety of 0.571/1.81. These are simulated results.' },
    ],
    figures: [
      { src: '../assets/cnc-bracket-fea-comparison.jpg', alt: 'SolidWorks Simulation stress contours comparing CNC bracket P1 and P2 variants', caption: 'Simulated P1/P2 comparison for bracket variants modeled from provided blueprints.', kind: 'plot' },
      { src: '../assets/cnc-bracket-toolpath.jpg', alt: 'Mastercam toolpath simulation for the documented CNC bracket operation', caption: 'Mastercam toolpath simulation for the documented CNC manufacturing workflow.', kind: 'screenshot' },
    ],
  },
  'arbor-press': {
    slug: 'arbor-press', type: 'project', status: 'completed', title: 'Arbor Press Design', date: '2025', role: 'Unknown', summary: 'An iterative arbor-press frame study spanning CAD revisions, static FEA, engineering drawings, mold work, and Mastercam programming.', tags: ['SolidWorks', 'FEA', 'Manufacturing'], confidentiality: 'Public project evidence',
    metrics: [
      { label: 'Load case', value: '3 ton', basis: 'requirement', note: 'Static FEA setup.' },
      { label: 'Maximum stress, P1 → P4', value: '301.1 → 346 → 311.4 → 188.7 MPa', basis: 'simulated', note: 'Reported SolidWorks Simulation results.' },
    ],
    sections: [
      { title: 'Design evolution', content: 'Four revisions were documented. P1 was a provided baseline; P2 was modeled as a cast-style revision; P3 was revised for machining; and P4 was designed from earlier FEA results to reinforce high-stress regions.' },
      { title: 'Analysis and manufacturing', content: 'SolidWorks static FEA used a 3-ton load, a fixed flat bottom surface, default solid meshing, and documented material selections. Native drawings, a P2 mold assembly, and Mastercam toolpath verification support the design and manufacturing-planning workflow.' },
      { title: 'Limits', content: 'Stress values are simulated; the project documents manufacturing planning rather than physical load testing.' },
    ],
    figures: [
      { src: '../assets/arbor-press-p2-p3.jpg', alt: 'CAD revision sequence showing Arbor Press P2 and P3 student-modeled designs', caption: 'Student-modeled P2/P3 revision sequence; P1 is not shown as Nicholas’s design.', kind: 'cad' },
      { src: '../assets/arbor-press-p4.jpg', alt: 'CAD render of the student-designed Arbor Press P4 revision', caption: 'Student-designed P4 revision developed from earlier FEA results; no physical load test is claimed.', kind: 'cad' },
    ],
  },
  'robotic-arm': {
    slug: 'robotic-arm', type: 'project', status: 'in-progress', title: '6-DOF Robotic Arm', date: 'September 2026 – present', role: 'Collaborative project — selected contributions by Nicholas Skiba', summary: 'A collaborative robotics platform where Nicholas contributed embedded diagnostics, serial testing, development-environment documentation, ROS scaffolding, and a reduced simulation.', tags: ['Embedded', 'ROS 2', 'Python'], confidentiality: 'Public repository evidence, with authorship mapping kept conservative',
    sections: [
      { title: 'Project status', content: 'An early-stage six-degree-of-freedom arm platform with planning complete and simulation beginning; hardware integration and full control remain planned.' },
      { title: 'Implemented contributions', content: 'Nicholas contributed Teensy 4.1 diagnostics and serial benchmarking through PlatformIO, Python serial tests, Docker/WSL/Dev Container setup documentation, and a ROS 2 scaffold. The implemented reduced simulation is a 2-link/mock-motor model.' },
      { title: 'Planned work', content: 'Full six-joint control, motor firmware, sensor drivers, URDF/Xacro, and six-DOF simulation remain planned. Listed hardware is architecture, not implemented integration.' },
    ],
  },
  'physics-surrogate-optimization': {
    slug: 'physics-surrogate-optimization', type: 'project', status: 'in-progress', title: 'Physics Surrogate + Optimization', date: '2026', role: 'Unknown', summary: 'A computational mechanics scaffold for a 3-DOF mass-spring-damper model, modal analysis, and later surrogate optimization.', tags: ['Python', 'Dynamics', 'Optimization'], confidentiality: 'Public repository evidence',
    sections: [
      { title: 'Current status', content: 'Partially implemented. The foundation is a 3-DOF mass-spring-damper formulation with system matrices and modal analysis.' },
      { title: 'Implemented', content: 'The dynamics and modal modules provide the documented physical-model foundation. The project is structured around engineering response metrics and validation before higher-level optimization.' },
      { title: 'Planned work', content: 'Dataset generation, a surrogate MLP, SLSQP design optimization, PPO, PID comparison, and performance results remain planned.' },
    ],
  },
  'progress-rail': {
    slug: 'progress-rail', type: 'experience', status: 'completed', title: 'Progress Rail', organization: 'Caterpillar Company', date: 'May 2026 – August 2026', role: 'Engine Controls Engineering Intern', summary: 'Generalized engineering experience in pressure-sensor validation, laboratory instrumentation, harness checks, and analysis workflows for locomotive-control systems.', tags: ['Validation', 'Instrumentation', 'Calibration'], confidentiality: 'Generalize; proprietary implementation, identifiers, configurations, raw data, and diagnostic logic excluded',
    sections: [
      { title: 'Scope', content: 'Work centered on six locomotive-control pressure sensors, with generalized validation and analysis details shown here.' },
      { title: 'Validation work', content: 'Built a repeatable pressure-sensor validation framework, assembled sensor harnesses, performed continuity/grounding/pinout/voltage checks, and integrated calibration equipment and laboratory instrumentation.' },
      { title: 'Analysis tools', content: 'Used Python and Excel for transfer curves, linearity, repeatability, accuracy, operating-range behavior, sensor-to-sensor consistency, regression, calibration, interpolation, residual evaluation, plots, and reports. Vector CANape, CAT ET, and dSPACE supported system-level validation.' },
      { title: 'Publication boundary', content: 'Company-specific identifiers, configurations, raw data, and diagnostic logic are intentionally omitted.' },
    ],
  },
  'deep-coat': {
    slug: 'deep-coat', type: 'experience', status: 'completed', title: 'Deep Coat Industries', organization: 'Deep Coat Industries', date: 'May 2025 – August 2025; December 2025 – January 2026', role: 'Engineering Intern', summary: 'Generalized internship experience spanning RF/EMI test-system design, instrumentation, Python automation, shielding analysis, and fixture/mechanism fabrication.', tags: ['RF / EMI', 'Instrumentation', 'Mechanical design'], confidentiality: 'Do not publish employer implementation details; clearance unresolved',
    metrics: [{ label: 'Approved measurement range', value: '500 Hz – 6.3 GHz', basis: 'resume-attested', note: 'Resume-level scope only.' }],
    sections: [
      { title: 'Approved public scope', content: 'Public-facing scope: RF/EMI test-system design, instrumentation, Python data automation, shielding analysis, AutoCAD fixture/mechanism design, and fabrication.' },
      { title: 'Test and design themes', content: 'Worked with anechoic test environments, antennas, VNAs, oscilloscopes, RF amplifiers, Python/Plotly workflows, and custom fixtures.' },
      { title: 'Publication boundary', content: 'Employer-specific implementation, solver internals, raw data, and private figures are excluded. The approved 500 Hz–6.3 GHz range describes the test-system scope; shielding analysis is presented without a frequency value.' },
    ],
  },
  fsae: {
    slug: 'fsae', type: 'experience', status: 'in-progress', title: 'Formula SAE Chassis Design', organization: 'Illinois Institute of Technology', date: 'August 2026 – present', role: 'Mechanical design contributor', summary: 'Current chassis and monocoque design work for an FSAE program, with rule-driven packaging and structural validation planned.', tags: ['SolidWorks', 'Vehicle structures', 'Packaging'], confidentiality: 'Resume-attested; team and ownership details limited',
    sections: [
      { title: 'Current work', content: 'Current work includes SolidWorks chassis and monocoque design for the front bulkhead, front hoop, side-impact structure, and driver packaging.' },
      { title: 'Constraints', content: 'The design work follows FSAE rules and the Percy template. These requirements shape structural layout and driver packaging decisions.' },
      { title: 'Planned validation', content: 'ANSYS validation is planned. No completed ANSYS result or performance metric is claimed in this stage.' },
    ],
  },
}
