'use strict';
import titleCtrl from './titleCtrl';
import copyrightCtrl from './copyright';
export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/home',
      template: '<home></home>',
      authenticate: true
    })
    .state('home.title', {
      url: '/title',
      template: `<div class="title">
        <h1 class="tit_t"><a id="1"></a>Mechanotherapy<br />in Orthodontics</h1>
        <p class="normal_t1">Volume I : Basic Biomechanics</p>
        <p class="normal_t2"><big>Mani Alikhani, DMD, MS, PhD</big></p>
        <p class="normal_t3">Associate Professor of Orthodontics</p>
        <p class="normal_t3">Director of CTOR</p>
        <p class="normal_t3">New York University College of Dentistry</p>
        <p class="normal_t2"><big>Cristina Teixeira, DMD, MS, PhD</big></p>
        <p class="normal_t3">Associate Professor of Orthodontics</p>
        <p class="normal_t3">Chair of Department of Orthodontics</p>
        <p class="normal_t3">New York University College of Dentistry</p>
        <p class="img_t"><img style="max-width:35%;" src="/assets/images/ctor press.png" alt="images" /></p>
      </div>
      `,
      controller: titleCtrl,
      controllerAs: 'vm'
    })
    .state('home.copyright', {
      url: '/copyright',
      template: `<div class="title">

        <p class="img_c"><a id="2"></a><img style="max-width:35%;" src="/assets/images/ctor press.png" alt="images" /></p>
        <hr />
        <p style="margin-bottom:30px;margin-top:10px;"></p>
        <p class="normal_c1">Mechanotherapy in Orthodontics</p>
        <p class="normal_c1">Vol.1 Basic Biomechanics</p>
        <p class="normal_c">Copyright &#169; 2014 CTOR PRESS</p>
        <p style="margin-top:30px;"></p>
        <p class="normal_left">All rights reserved. No part of this publication may be reproduced, distributed or transmitted in any form or by any electronic, mechanical, photocopying, recording or otherwise, including information storage in a database and retrieval system, without permission in writing from the publisher.</p>
        <p class="normal_c2">CTOR PRESS LLC</p>
        <p class="normal_c1">79 Hudson Street, Suite 400</p>
        <p class="normal_c1">Hoboken, NJ 07030</p>
        <p class="normal_c">orthodonticscientist.org</p>
        <p class="normal_c2">First Edition</p>
        <p class="normal_c">ISBN : 978-0-692-23498-3</p>
        <p class="normal_c2">Designed by : Chinapa Sangsuwon</p>
        </div>`,
      controller: copyrightCtrl,
      controllerAs: 'vm'
    })
    .state('home.foreword', {
      url: '/forward',
      template: `<div class="title">

<h1 class="tit_f"><a id="3"></a>Foreword</h1>
<p class="normal_f">The application of sound biomechanical principles in orthodontics is a fundamental requirement for achieving optimum efficacy and predictability of any design of orthodontic appliance. Understanding the principles of biomechanics will not only allow for more efficient and expedient orthodontic treatment, but will also serve to minimize unwanted treatment side effects and possible collateral damage to the surrounding tissues of the teeth. The importance of understanding the basic principles of the biomechanics of tooth movement cannot be overstated.</p>
<p class="normal_f"><i>Mechanotherapy in Orthodontics</i> is a unique, modern, and enjoyable educational experience for the orthodontic resident, orthodontic faculty member, and the orthodontic clinician at large. It has been created by Professor Mani Alikhani, Director of the Consortium for Translational Orthodontic Research (CTOR) and members of the CTOR team at New York University College of Dentistry.</p>
<p class="normal_f">This first volume addresses the essential laws that govern tooth movement. There have been numerous orthodontic appliances introduced over the past 100 years and yet the underlying laws of Physics have not changed. Despite this caveat, it is an accepted fact that often orthodontic treatment time is spent managing the adverse side effects brought about by improper use of biomechanics. <i>Mechanotherapy in Orthodontics</i> clearly and unequivocally presents these sound biomechanical principles with the use of a modern interactive and animated format intended to improve the orthodontic experience for the patient and orthodontist. Readers will find this new format to perfectly complement the biomechanical insights offered by the author. The summaries at the end of each chapter and learning features are value added inclusions</p>
<p class="normal_f">I fully expect <i>Mechanotherapy in Orthodontics</i> by Professor Mani Alikhani to be a valuable staple for every orthodontic department biomechanics curriculum and orthodontist world-wide. It is simply that good!</p>
<p class="normal_f1">Elliott M. Moskowitz, DDS, M.Sd, CDE</p>
<p class="normal_f2">Clinical Professor, Department of Orthodontics</p>
<p class="normal_f2">New York University College of Dentistry</p>
<p class="normal_f2">Editor in Chief, Seminars in Orthodontics</p>
</div>`
    })
    .state('home.preface', {
      url: '/preface',
      template: `<div class="title">

<h1 class="tit_f"><a id="4"></a>Preface</h1>
<p class="normal_f">Diagnosis and treatment planning has been the center of attention of orthodontic literature from the start of this specialty. These steps determine the path taken to address the problem lists of our patients. Our treatment plan is greatly influenced by our current knowledge, clinical experience, and training that we have received from our mentors and, therefore, it is a mixture of philosophy and science. Due to the philosophy component, the outcome of treatment planning among orthodontists may vary significantly. This variability not only is observed between the clinicians but also at different time points in life of an orthodontist due to the gradual changes in cosmetic values, practicality, public acceptance of the treatment, and experience of the clinician. On the other hand, how to provide the mechanical treatment and to stimulate the biological response to achieve the goals of our treatment plan is pure science and our personal opinion does not play a role in the outcome of this interaction. The purpose of this book, therefore, is not to agree or disagree with clinicians&#8217; treatment plans, but to help the clinician to execute his or her plan of treatment efficiently using scientific understanding of mechanics and biology, which we summarize as mechanotherapy.</p>
<p class="normal_f">The need for a new book that is focused on mechanotherapy was realized when we noticed our students spending many hours on diagnosis and treatment planning for their cases but, at the time of treatment, applying similar mechanics for different and even opposite malocclusions which significantly defeats the purpose of diagnosis. One of the reasons that mechanotherapy has never taken the center stage in orthodontics is due to the fact that our evaluation of treatment outcomes, even today, is based on the assessment of final result and not the path that was taken to accomplish that result, even though the path may have been unnecessary, prolonged, or harmful. The other reason behind this distance between diagnosis and mechanotherapy is that mechanical concepts have been presented in a very dry and complex fashion that many students and faculty do not dare to incorporate into their daily practice. Therefore, this book has been written in a very simple language to make the mechanotherapy a very friendly and fun subject to learn and apply in clinical treatment. To achieve this goal, many new terminologies have been introduced in this book and many old concepts have been revisited and explained in a different way. It should be emphasized that our approach does not undermine the value of classic literature but gives a practical view to those findings.</p>
<p class="normal_f">In addition to taking a new look at current understanding in mechanotherapy, many times in this book you will see that new concepts have been introduced that have never been discussed before in the literature, but they are a logical outcome of physical principles. Many of the biological concepts introduced in Volumes II or III are a summary of extensive research that has been completed by our laboratories or others in the field of tooth movement or skeletal response to mechanical stimulation during or after growth. It should be emphasized that we are still at beginning of understanding of how the body responds to mechanical stimulation and the number of questions by far bypass the number of the answers. As any other science, our lack of full understanding of the subject should not discourage us but only inspire us for future experiments that will polish our understanding closer to reality.</p>
<p class="normal_f">In this regard, the first volume of this book has been dedicated to reviewing and understanding the physical principles that can be used during treatment to achieve the desired position of the teeth with minimum adverse movement. In this volume, we treat the target of our treatment, whether it is tooth or bone, as an object and, therefore, using our understanding of physics, we define the optimal mechanical design to move the object in the desired direction. Therefore, Volume I focuses on the components that we can use to construct our mechanical design while Volume II concentrates on how to use these components at different stages of treatment to render the desire correction for a patient with dental malocclusion (orthodontic treatment). The third volume of this book has been dedicated to skeletal treatment (orthopedic treatment). In all three volumes, anytime biology changes the response of tooth or bone to mechanical stimulation, and the simple assumption of tooth and bone as a physical object does not apply anymore, new principles have been introduced.</p>
<p class="normal_f">From the educational point of view, this book has unique characteristics. First, unlike other e-books, this book is full of animations. Each concept has been illustrated and animated to help the reader to visualize different scenarios. To take advantage of this unique characteristic of the book, we recommend readers spend a few minutes reviewing the tutorial to learn how to use the animations. Second, similar to e-books, this book has incorporated many tools that facilitate the learning process such as highlighting, bookmarking, taking notes, and searching. Third, at the end of each chapter, your will find a series of questions related to that chapter that will help you to test your knowledge on the concepts that you just learned. Fourth, at the end of each chapter there is a list of suggested reading materials for readers interested to further explore some of those subjects. As mentioned, the majority of the concepts are new and unfortunately there are no other reading materials available. Due to this innovative approach, even when the reader believes that he or she is comfortable with the concept, it is highly recommended that readers follow the book chapter-by-chapter since understanding one chapter is fundamental in understanding of the next chapter.</p>
<p class="normal_f">We hope that this book will function as a reference for educators, students, and clinicians on how to custom design their mechanics based on the individual patient needs, and that they do not fall into the trap of a &#8220;one cookbook approach&#8221; for all clinical scenarios.</p>
<p class="normal_f1">Mani Alikhani, DMD, MS, PhD.</p>
<p class="normal_f2">Associate Professor of Orthodontics</p>
<p class="normal_f2">Director of CTOR</p>
<p class="normal_f2">New York University College of Dentistry</p>
<p class="normal_f1">Cristina Teixeira, DMD, MS, PhD.</p>
<p class="normal_f2">Associate Professor of Orthodontics</p>
<p class="normal_f2">Chair of Department of Orthodontics</p>
<p class="normal_f2">New York University College of Dentistry</p>
</div>
`
    })
    .state('home.ack', {
      url: '/acknowledgements',
      template: `<div class="title">

<h1 class="tit_f"><a id="5"></a>Acknowledgements</h1>
<p class="normal_f">This project was only possible thanks to the dedication of a few dreamers. We wish to express our deepest gratitude to Dr. Chinapa Sangsuwon for her utmost dedication to this book and her belief in its purpose. We would like to thank her for her artful animations and for overseeing the creation of this project.</p>
<p class="normal_f">We also want to thank our orthodontic residents for their contribution and support, as well as for their pointed questions on the subject that motivated us to develop a new, better tool to teach the most important principles in orthodontics. Finally, we wish to express our love and gratitude to our families for their constant support, endless nagging, and unconditional love throughout the period of creating this book.</p>
</div>`
    })
    .state('home.contributors', {
      url: '/contributors',
      template: `<div class="title">
<h1 class="tit_t"><a id="3"></a>Contributors</h1>
<p class="normal_t2">Mani Alikhani</p>
<p class="normal_t2">Cristina Teixeira</p>
<p class="normal_t2">Chinapa Sangsuwon</p>
<p class="normal_t2">Sarah Alansari</p>
</div>`
    })
    .state('home.intro', {
      url: '/introduction',
      template: `<div background="/assets/images/Book-BG.png">
  <h1 class="tit_2"><a id="002"></a><a id="6"></a><span>Chapter 1</span></h1>
<h1 class="tit"><span>Force and Moment</span></h1>
<p class="indent"><span>This chapter introduces the basic principles of biomechanics and the different terminology used in this book to describe mechanotherapy. First, we focus on the characteristics of <i>force</i>&#8212;the tool we use to move a tooth. We describe the <i>center of resistance</i> of a tooth to help understand how a tooth reacts to forces. Finally, we describe how <i>moments</i> are produced in response to the location of the force and the center of resistance. Understanding the elements of force, center of resistance, and moments is fundamental in understanding different types of tooth.</span></p>
</div>`
    })
    .state('home.force', {
      url: '/force',
      template: `<div>
<h1 class="tit_1"><a id="7"></a><a id="501"></a><span>Force</span></h1>
<p class="indent"><span>Force is an action that causes an object (e.g., a tooth) to move or a material (e.g., a wire) to change its shape (<a href="#fig1.1">Figure 1.1</a>).</span></p>
<p class="indent"><span>Regardless of what appliance we use in orthodontics, the final outcome of our mechanotherapy is always the production of a force.</span></p>
<table style="width:100%; margin-bottom:0em">
<tr>
<td>
<p style="float:left;"><a id="play1a" onclick="play1a()"><img id="img1a" style="max-width:100%;" src="/assets/images/ch1_fig1_A0000.png"/></a></p>
</td>
<td>
<p style="float:right;"><a id="play1b" onclick="play1b()"><img id="img1b" style="max-width:100%;" src="/assets/images/ch1_fig1_B_0000.png"/></a></p>
</td>
</tr>
</table>
<p class="caption" id="fig1.1"><span class="btn_play"></span>&#160;&#160;&#160;&#160;&#160;<span><i>Figure 1.1. Force can cause movement or change in the shape of an object</i></span></p>
<p class="normal"><span>Force has two main components:</span></p>
<p class="normal"><span>1. Magnitude: the amount of the force applied.</span></p>
<p class="normal"><span>2. Direction: the specific path through which the force is applied.</span></p>
<h2 class="level2"><a id="1"></a><span>Magnitude of the Force</span></h2>
<p class="indent"><span>The magnitude of force describes how much force is applied.</span></p>
<p class="indent"><span>To facilitate the analysis of the force, we draw an arrow. The length of the arrow represents the magnitude of the force and is arbitrarily defined by the user (<a href="#fig1.2">Figure 1.2</a>).</span></p>
<p class="indent"><span>In orthodontics, the most common units used to measure the magnitude of the force are Newton (N) and gram force (g.f).</span></p>
<p class="img"><img style="max-width:100%;" src="/assets/images/fig2.png" alt="images" /></p>
<p class="caption" id="fig1.2"><span><i>Figure 1.2. Magnitude of the force is illustrated by the length of the arrow. The longer the arrow, the higher the magnitude of the force.</i></span></p>
<h3 class="level3"><span>Is the Magnitude of Force Important in Orthodontics?</span></h3>
<p class="indent"><span>The relationship between the magnitude of force and the speed of a moving object is observed in many aspects of everyday life. </span></p>
<p class="indent"><span>For example, if you hit a ball with a baseball bat, the speed of the ball will vary depending on how hard you hit that ball (the magnitude of the force that you apply).</span></p>
<p class="indent"><span>In biology, the relationship between the magnitude of force and the speed of tooth movement is not necessarily linear. If you apply a higher force to a tooth it does not mean that the tooth will move faster. Therefore, the selection of the force&#8217;s magnitude in orthodontics is not based on mechanical principles, but rather on pure biological ones.</span></p>
<h2 class="level2"><a id="2"></a><span>Direction of the Force </span></h2>
<p class="indent"><span>To start your mechanotherapy, you should have a clear vision of your final result. Therefore, the direction of the applied force is fundamental. The direction of your movement is dictated by the three components of force:</span></p>
<p class="indent3"><span>1. Point of application</span></p>
<p class="indent3"><span>2. Line of action </span></p>
<p class="indent3"><span>3. Sense</span></p>
<h3 class="level3"><span>1. Point of Applicaiton</span></h3>
<p class="indent"><span>The same magnitude of force can produce different types of movement depending on the point of application on the tooth (<a href="#fig1.3">Figure 1.3</a>).</span></p>
<table style="width:100%; margin-bottom:0em">
<tr>
<td>
<p style="float:left;"><a id="play3_1" onclick="play3_1()"><img id="img3_1" style="max-width:100%;" src="/assets/images/ch1_fig1_A0000.png"/></a></p>
</td>
<td>
<p style="float:right;"><a id="play3_2" onclick="play3_2()"><img id="img3_2" style="max-width:100%;" src="/assets/images/fig3B/ch1_fig3_B_0000.png"/></a></p>
</td>
</tr>
</table>
<p class="caption" id="fig1.3"><span class="btn_play"></span>&#160;&#160;&#160;&#160;&#160;<span><i>Figure 1.3. The point of application of the force determines the type of movement. Applying a force through the center of resistance will result in a very different movement as when the same force is applied off the center of resistance.</i></span></p>
<h3 class="level3"><span>2. Line of Action</span></h3>
<p class="indent"><span>Line of action is the path through which the force is applied (<a href="#fig1.4">Figure 1.4</a>). A different type of movement can be obtained with exactly the same magnitude of force applied at the exact same point by simply changing the line of action.</span></p>
<table style="width:100%; margin-bottom:0em">
<tr>
<td>
<p style="float:left;"><a id="play4_1" onclick="play4_1()"><img id="img4_1" style="max-width:100%;" src="/assets/images/ch1_fig4_A_0000.png"/></a></p>
</td>
<td>
<p style="float:right;"><a id="play4_2" onclick="play4_2()"><img id="img4_2" style="max-width:100%;" src="/assets/images/ch1_fig4_B_0000.png"/></a></p>
</td>
</tr>
</table>
<p class="caption" id="fig1.4"><span class="btn_play"></span>&#160;&#160;&#160;&#160;&#160;<span><i>Figure 1.4. Changing the line of action will produce a different movement. The same magnitude of force applied at the same point of application can produce different types of movement by changing the line of action just a few degrees.</i></span></p>
<h3 class="level3"><span>3. Sense</span></h3>
<p class="indent"><span>Assuming the force magnitude, the point of application, and the line of action are the same, changing the sense of the force will determine the direction of the final movement (<a href="#fig1.5">Figure 1.5</a>).</span></p>
<p class="img"><a id="play5_1" onclick="play5_1()"><img id="img5_1" style="max-width:100%;" src="/assets/images/fig5/ch1_fig50000.png"/></a></p>
<p class="caption" id="fig1.5"><span class="btn_play"></span>&#160;&#160;&#160;&#160;&#160;<span><i>Figure 1.5. When all components of the force are equal, the sense of the force will determine the direction of movement. Forces of opposite sense (illustrated by the direction of the arrowhead) will produce opposite effects even when the magnitude, direction, and point of application of the force are maintained.</i></span></p>
<h2 class="level2"><a id="3"></a><span>Law of Transmissibility</span></h2>
<p class="indent"><span>Often, due to physical limitations, we cannot apply the force at the exact preferred location. How do we overcome this problem?</span></p>
<p class="indent"><span>Assume you are pulling a small cart from its handle, the cart will move in the direction in which you are pulling (<a href="#fig1.6">Figure 1.6</a>). </span></p>
<p class="img1"><a id="play6" onclick="play6()"><img id="img6" style="max-width:100%;" src="/assets/images/fig6/ch1_fig6_0000.png"/></a></p>
<p class="caption" id="fig1.6"><span class="btn_play"></span>&#160;&#160;&#160;&#160;&#160;<span><i>Figure 1.6. A cart will move in a particular direction when pulled by the handle.</i></span></p>
<p class="indent_2"><span>Now, what happens if we tie a rope to the handle and pull on the rope (<a href="#fig1.7">Figure 1.7</a>)? </span></p>
<p class="img1"><a id="play7" onclick="play7()"><img id="img7" style="max-width:100%;" src="/assets/images/fig7/ch1_fig7_0000.png"/></a></p>
<p class="caption" id="fig1.7"><span class="btn_play"></span>&#160;&#160;&#160;&#160;&#160;<span><i>Figure 1.7. Pulling on the rope will not change the direction of the movement of the cart.</i></span></p>
<p class="indent_2"><span>The direction of movement will not change if we pull on the rope, as long as the rope is kept parallel to the handle</span></p>
<p class="indent"><span>Moving your hand along the rope does not change the direction of the movement and you are able to produce the same effect even though your force is not applied directly to the handle. </span></p>
<p class="indent"><span>Notice that the rope represents the line of action. Therefore, we can conclude that by moving our force along the line of action, we can produce the same movement regardless of where we apply the force. If you change the angle of the rope, therefore changing the line of action of the force, you will produce a different movement. </span></p>
<p class="indent"><span>The ability to move a force along the line of action and produce the same result is called the law of transmissibility (<a href="#fig1.8">Figure 1.8</a>).</span></p>
<p class="img1"><a id="play8" onclick="play8()"><img id="img8" style="max-width:100%;" src="/assets/images/fig8/ch1_fig8_0000.png"/></a></p>
<p class="caption" id="fig1.8"><span class="btn_play"></span>&#160;&#160;&#160;&#160;&#160;<span><i>Figure 1.8. Base on the law of transmissibility, the force can be moved along the line of action and still produce the same results.</i></span></p>
<p class="indent_2"><span>Law of transmissibility is very useful in designing orthodontic mechanics. Often, due to physical limitations, a force cannot be applied directly to a specific point on a tooth. By using the law of transmissibility, we can apply the same force to a different point of easier access along the same line of action to achieve similar results (<a href="#fig1.9">Figure 1.9</a>).</span></p>
<div class="main-background-div">
<div class="main-background-div-500px">
<div class="fin9">
<p class="img"><a id="play9" onclick="play9()"><img id="img9" style="max-width:100%;" src="/assets/images/fig9/ch1_fig9_0000.png"/></a></p>
</div>
</div>
</div>
<p class="caption" id="fig1.9"><span class="btn_play"></span>&#160;&#160;&#160;&#160;&#160;<span><i>Figure 1.9. Both F1 and F2 forces produce similar effects because they have the same line of action and sense. The law of transmissibility allows us to adjust the point of application from inside the mouth to outside and achieve patient comfort.</i></span></p>
<p class="indent"><span>To help understand the implication of this law in the clinic, assume you need to apply a force at the center of a tooth. You design a hook that attaches to the bracket and extends to a point closer to the center of the tooth (<a href="#fig1.10">Figure 1.10</a>). </span></p>
<p class="img"><img style="max-width:100%;" src="/assets/images/fig10.png" alt="images" /></p>
<p class="caption" id="fig1.10"><span><i>Figure 1.10. A hook can be used to apply a force not to the bracket on the crown but close to the center of a tooth.</i></span></p>
<p class="indent"><span>After applying the force, you notice that the hook irritates the mucosa due to its excessive length causing discomfort to the patient. To solve this problem you could shorten the hook, but then your force will not pass through center of the tooth. To maintain the same effect you need to adjust the hook so that the force stays in the same line of action (<a href="#fig1.11">Figure 1.11</a>). </span></p>
<p class="img"><a id="play11" onclick="play11()"><img id="img11" style="max-width:100%;" src="/assets/images/fig11/ch1_fig11_0000.png"/></a></p>
<p class="caption" id="fig1.11"><span class="btn_play"></span>&#160;&#160;&#160;&#160;&#160;<span><i>Figure 1.11. The length and the angle of the hook can be changed to produce a force on the same line of action, without causing discomfort to the patient.</i></span></p>
<h2 class="level2"><a id="4"></a><span>Adding Forces Together</span></h2>
<p class="indent"><span>During orthodontics treatment, we often need to apply two or three forces to a tooth simultaneously. For example, we want to intrude and retract a central incisor. If we apply both intrusion and retraction forces the tooth should move in both directions. As a result, the tooth will change to a position that is the sum of both movements. If instead of using two forces you apply a single force that is equal to the sum of both forces&#8212;called resultant force&#8212;you will produced exactly the same movement (<a href="#fig1.12">Figure 1.12</a>).</span></p>
<p class="img"><a id="play12" onclick="play12()"><img id="img12" style="max-width:100%;" src="/assets/images/fig12/ch1_fig12_0000.png"/></a></p>
<p class="caption" id="fig1.12"><span class="btn_play"></span>&#160;&#160;&#160;&#160;&#160;<span><i>Figure 1.12. Simultaneous application of intrusion and retraction force to the same tooth produces the same result in tooth movement as using a single force equal to the resultant force.</i></span></p>
<h3 class="level3"><span>How to Calculate the Resultant Force</span></h3>
<p class="indent"><span>If all the forces applied to a tooth have the same line of action, the magnitude of resultant force is the sum of the magnitude of all forces. This is only true if they share the same sense (<a href="#fig1.13">Figure 1.13</a>). </span></p>
<p class="indent"><span>If the forces have the same line of action but opposite senses, the magnitude of resultant force is the difference in the magnitudes of all forces (<a href="#fig1.14">Figure 1.14</a>)</span></p>
<p class="img"><a id="play13" onclick="play13()"><img id="img13" style="max-width:100%;" src="/assets/images/fig13/ch1_fig13_0000.png"/></a></p>
<p class="caption" id="fig1.13"><span class="btn_play"></span>&#160;&#160;&#160;&#160;&#160;<span><i>Figure 1.13. The resultant force of different forces with the same line of action and the same sense equals the sum of those forces.</i></span></p>
<p class="img"><a id="play14" onclick="play14()"><img id="img14" style="max-width:100%;" src="/assets/images/fig14/ch1_fig14_0000.png"/></a></p>
<p class="caption" id="fig1.14"><span class="btn_play"></span>&#160;&#160;&#160;&#160;&#160;<span><i>Figure 1.14. The resultant force of different forces with the same line of action but opposite senses equals the difference between those forces.</i></span></p>
<p class="indent"><span>If the forces we apply to a tooth do not have the same lines of action, the sum of the forces is not simply the sum of their magnitudes. In these situations, the calculation of magnitude of the resultant force is more complex because we have to include the angle of the lines of action. Although for research purposes calculating the exact magnitude of the sum of all forces is necessary, in clinical practice the precise magnitude of the resultant force is not very important as long as we keep the magnitude of individual forces within the biological range. Because these calculations are impractical in daily clinical practices, this subject is not covered in this chapter.</span></p>
<p class="indent"><span>However, the direction of the resultant force is important because it will dictate the final position of the tooth. The easiest way to see the direction of the resultant force in a clinic application is to draw an imaginary parallelogram. </span></p>
<p class="indent"><span>If both forces have a common point of application, we just need to draw a parallelogram by drawing two lines parallel to our forces. The resultant force will be the diagonal of this parallelogram (<a href="#fig1.15">Figure 1.15</a>).</span></p>
<p class="img"><a id="play15" onclick="play15()"><img id="img15" style="max-width:100%;" src="/assets/images/fig15/ch1_fig15_0000.png"/></a></p>
<p class="caption" id="fig1.15"><span class="btn_play"></span>&#160;&#160;&#160;&#160;&#160;<span><i>Figure 1.15. The resultant force of two forces with a common point of application will bisect an imaginary parallelogram defined by lines parallel to these forces.</i></span></p>
<p class="indent"><span>What happens if the forces do not have the same point of application? We can determine the resultant force by moving one of the forces along its line of action until it crosses the line of action of the other force (based on the law of transmissibility). The intersection point resembles a common point of application from which we continue to construct the parallelogram (<a href="#fig1.16">Figure 1.16</a>).</span></p>
<p class="img"><a id="play16" onclick="play16()"><img id="img16" style="max-width:100%;" src="/assets/images/fig16/ch1_fig16_0000.png"/></a></p>
<p class="caption" id="fig1.16"><span class="btn_play"></span>&#160;&#160;&#160;&#160;&#160;<span><i>Figure 1.16. The law of transmissibility allows for the identification of the resultant force of two forces with different points of application.</i></span></p>
<h2 class="level2"><a id="5"></a><span>Components of Force</span></h2>
<p class="indent"><span>In orthodontics, we dissect all forces into a vertical and horizontal component. In other words, vertically we either intrude or extrude, and horizontally we either mesialize or distalize (sagittal view) or move the tooth palatally or buccally (occlusal view). Therefore, when we apply a force that is not purely vertical or horizontal, we need to know what vertical and horizontal effects it will have on the tooth. In other words, we need to resolve the force to its vertical and horizontal components (<a href="#fig1.17">Figure 1.17</a>).</span></p>
<p class="img"><img style="max-width:100%;" src="/assets/images/fig17.png" alt="images" /></p>
<p class="caption" id="fig1.17"><span><i>Figure 1.17. Vertical and horizontal components of a force.</i></span></p>
<h3 class="level3"><span>Resolving a Force into Components</span></h3>
<p class="indent"><span>To analyze the horizontal and vertical components of your forces, simply draw a parallelogram in your mind so that your force is the diagonal and its vertical and horizontal components are the sides of the parallelogram.</span></p>
<p class="indent"><span>Depending on the angle of your force, your vertical and horizontal components can be different, but will never exceed the magnitude of the force that you applied (<a href="#fig1.18">Figure 1.18</a>). </span></p>
<table style="width:100%; margin-bottom:0em">
<tr>
<td>
<p style="float:left;"><a id="play18a" onclick="play18a()"><img id="img18a" style="max-width:100%;" src="/assets/images/fig18_A/ch1_fig18_A0000.png"/></a></p>
</td>
<td>
<p style="float:right;"><a id="play18b" onclick="play18b()"><img id="img18b" style="max-width:100%;" src="/assets/images/fig18_B/ch1_fig18_B0000.png"/></a></p>
</td>
</tr>
</table>
<p class="caption" id="fig1.18"><span class="btn_play"></span>&#160;&#160;&#160;&#160;&#160;<span><i>Figure 1.18. Same forces with same point of application, if applied at different angles, produce different vertical and horizontal components.</i></span></p><br />
</div>
`
    })
    .state('home.gravity',{
      url: '/gravity',
      templateUrl: 'gravity.html'
    })
    .state('home.restricted-objects',{
      url: '/restricted-objects',
      templateUrl: 'restricted-objects.html'
    })
.state('home.tooth',{
  url:'/tooth',
  templateUrl: 'tooth.html'
})
.state('home.moment-definition',{
  url: '/moment-definition',
  template: `<h1 class="tit_1"><a id="9"></a><a id="503"></a><span>Moment</span></h1>
<p class="indent"><span>If the line of action of a force passes through the center of resistance of a tooth, that force will not produce any tipping (<a href="#fig1.34">Figure 1.34</a>).</span></p>
<p class="img"><a id="play34" onclick="play34()"><img id="img34" style="max-width:100%;" src="/assets/images/fig34/ch1_fig340000.png"/></a></p>
<p class="caption" id="fig1.34"><span class="btn_play"></span>&#160;&#160;&#160;&#160;&#160;<span><i>Figure 1.34. A force that passes through center of resistance of a tooth will displace it without causing any tipping. Note: For ease of illustration, the alveolar bone is not shown.</i></span></p>
<p class="indent"><span>If the line of action of an applied force does not pass through the center of resistance, the force will produce some tipping. The potential for tipping is measured as a moment (<a href="#fig1.35">Figure 1.35</a>).</span></p>
<p class="img"><a id="play35" onclick="play35()"><img id="img35" style="max-width:100%;" src="/assets/images/fig35/ch1_fig350000.png"/></a></p>
<p class="caption" id="fig1.1"><span class="btn_play"></span>&#160;&#160;&#160;&#160;&#160;<span><i>Figure 1.35. A force that does not pass through center of resistance will displace the tooth and cause moment resulting in tipping.</i></span></p>`
})
.state('home.magnitude-of-force',{
  url: '/magnitude-of-force',
  template: `<h2 class="level2"><a id="1"></a><span>Magnitude of the Force</span></h2>
<p class="indent"><span>The magnitude of force describes how much force is applied.</span></p>
<p class="indent"><span>To facilitate the analysis of the force, we draw an arrow. The length of the arrow represents the magnitude of the force and is arbitrarily defined by the user (<a href="#fig1.2">Figure 1.2</a>).</span></p>
<p class="indent"><span>In orthodontics, the most common units used to measure the magnitude of the force are Newton (N) and gram force (g.f).</span></p>
<p class="img"><img style="max-width:100%;" src="/assets/images/fig2.png" alt="images" /></p>
<p class="caption" id="fig1.2"><span><i>Figure 1.2. Magnitude of the force is illustrated by the length of the arrow. The longer the arrow, the higher the magnitude of the force.</i></span></p>
<h3 class="level3"><span>Is the Magnitude of Force Important in Orthodontics?</span></h3>
<p class="indent"><span>The relationship between the magnitude of force and the speed of a moving object is observed in many aspects of everyday life. </span></p>
<p class="indent"><span>For example, if you hit a ball with a baseball bat, the speed of the ball will vary depending on how hard you hit that ball (the magnitude of the force that you apply).</span></p>
<p class="indent"><span>In biology, the relationship between the magnitude of force and the speed of tooth movement is not necessarily linear. If you apply a higher force to a tooth it does not mean that the tooth will move faster. Therefore, the selection of the force&#8217;s magnitude in orthodontics is not based on mechanical principles, but rather on pure biological ones.</span></p>`
})
.state('home.direction-of-force',{
  url: '/direction-of-force',
  template:`<h2 class="level2"><a id="2"></a><span>Direction of the Force </span></h2>
<p class="indent"><span>To start your mechanotherapy, you should have a clear vision of your final result. Therefore, the direction of the applied force is fundamental. The direction of your movement is dictated by the three components of force:</span></p>
<p class="indent3"><span>1. Point of application</span></p>
<p class="indent3"><span>2. Line of action </span></p>
<p class="indent3"><span>3. Sense</span></p>
<h3 class="level3"><span>1. Point of Applicaiton</span></h3>
<p class="indent"><span>The same magnitude of force can produce different types of movement depending on the point of application on the tooth (<a href="#fig1.3">Figure 1.3</a>).</span></p>
<table style="width:100%; margin-bottom:0em">
<tr>
<td>
<p style="float:left;"><a id="play3_1" onclick="play3_1()"><img id="img3_1" style="max-width:100%;" src="/assets/images/fig3A/ch1_fig1_A0000.png"/></a></p>
</td>
<td>
<p style="float:right;"><a id="play3_2" onclick="play3_2()"><img id="img3_2" style="max-width:100%;" src="/assets/images/fig3B/ch1_fig3_B_0000.png"/></a></p>
</td>
</tr>
</table>
<p class="caption" id="fig1.3"><span class="btn_play"></span>&#160;&#160;&#160;&#160;&#160;<span><i>Figure 1.3. The point of application of the force determines the type of movement. Applying a force through the center of resistance will result in a very different movement as when the same force is applied off the center of resistance.</i></span></p>
<h3 class="level3"><span>2. Line of Action</span></h3>
<p class="indent"><span>Line of action is the path through which the force is applied (<a href="#fig1.4">Figure 1.4</a>). A different type of movement can be obtained with exactly the same magnitude of force applied at the exact same point by simply changing the line of action.</span></p>
<table style="width:100%; margin-bottom:0em">
<tr>
<td>
<p style="float:left;"><a id="play4_1" onclick="play4_1()"><img id="img4_1" style="max-width:100%;" src="/assets/images/fig4A/ch1_fig4_A_0000.png"/></a></p>
</td>
<td>
<p style="float:right;"><a id="play4_2" onclick="play4_2()"><img id="img4_2" style="max-width:100%;" src="/assets/images/fig4B/ch1_fig4_B_0000.png"/></a></p>
</td>
</tr>
</table>
<p class="caption" id="fig1.4"><span class="btn_play"></span>&#160;&#160;&#160;&#160;&#160;<span><i>Figure 1.4. Changing the line of action will produce a different movement. The same magnitude of force applied at the same point of application can produce different types of movement by changing the line of action just a few degrees.</i></span></p>
<h3 class="level3"><span>3. Sense</span></h3>
<p class="indent"><span>Assuming the force magnitude, the point of application, and the line of action are the same, changing the sense of the force will determine the direction of the final movement (<a href="#fig1.5">Figure 1.5</a>).</span></p>
<p class="img"><a id="play5_1" onclick="play5_1()"><img id="img5_1" style="max-width:100%;" src="/assets/images/fig5/ch1_fig50000.png"/></a></p>
<p class="caption" id="fig1.5"><span class="btn_play"></span>&#160;&#160;&#160;&#160;&#160;<span><i>Figure 1.5. When all components of the force are equal, the sense of the force will determine the direction of movement. Forces of opposite sense (illustrated by the direction of the arrowhead) will produce opposite effects even when the magnitude, direction, and point of application of the force are maintained.</i></span></p>`
})
.state('home.transmissibility', {
  url: '/transmissibility',
  template: `<h2 class="level2"><a id="3"></a><span>Law of Transmissibility</span></h2>
<p class="indent"><span>Often, due to physical limitations, we cannot apply the force at the exact preferred location. How do we overcome this problem?</span></p>
<p class="indent"><span>Assume you are pulling a small cart from its handle, the cart will move in the direction in which you are pulling (<a href="#fig1.6">Figure 1.6</a>). </span></p>
<p class="img1"><a id="play6" onclick="play6()"><img id="img6" style="max-width:100%;" src="/assets/images/fig6/ch1_fig6_0000.png"/></a></p>
<p class="caption" id="fig1.6"><span class="btn_play"></span>&#160;&#160;&#160;&#160;&#160;<span><i>Figure 1.6. A cart will move in a particular direction when pulled by the handle.</i></span></p>
<p class="indent_2"><span>Now, what happens if we tie a rope to the handle and pull on the rope (<a href="#fig1.7">Figure 1.7</a>)? </span></p>
<p class="img1"><a id="play7" onclick="play7()"><img id="img7" style="max-width:100%;" src="/assets/images/fig7/ch1_fig7_0000.png"/></a></p>
<p class="caption" id="fig1.7"><span class="btn_play"></span>&#160;&#160;&#160;&#160;&#160;<span><i>Figure 1.7. Pulling on the rope will not change the direction of the movement of the cart.</i></span></p>
<p class="indent_2"><span>The direction of movement will not change if we pull on the rope, as long as the rope is kept parallel to the handle</span></p>
<p class="indent"><span>Moving your hand along the rope does not change the direction of the movement and you are able to produce the same effect even though your force is not applied directly to the handle. </span></p>
<p class="indent"><span>Notice that the rope represents the line of action. Therefore, we can conclude that by moving our force along the line of action, we can produce the same movement regardless of where we apply the force. If you change the angle of the rope, therefore changing the line of action of the force, you will produce a different movement. </span></p>
<p class="indent"><span>The ability to move a force along the line of action and produce the same result is called the law of transmissibility (<a href="#fig1.8">Figure 1.8</a>).</span></p>
<p class="img1"><a id="play8" onclick="play8()"><img id="img8" style="max-width:100%;" src="/assets/images/fig8/ch1_fig8_0000.png"/></a></p>
<p class="caption" id="fig1.8"><span class="btn_play"></span>&#160;&#160;&#160;&#160;&#160;<span><i>Figure 1.8. Base on the law of transmissibility, the force can be moved along the line of action and still produce the same results.</i></span></p>
<p class="indent_2"><span>Law of transmissibility is very useful in designing orthodontic mechanics. Often, due to physical limitations, a force cannot be applied directly to a specific point on a tooth. By using the law of transmissibility, we can apply the same force to a different point of easier access along the same line of action to achieve similar results (<a href="#fig1.9">Figure 1.9</a>).</span></p>
<div class="main-background-div">
<div class="main-background-div-500px">
<div class="fin9">
<p class="img"><a id="play9" onclick="play9()"><img id="img9" style="max-width:100%;" src="/assets/images/fig9/ch1_fig9_0000.png"/></a></p>
</div>
</div>
</div>
<p class="caption" id="fig1.9"><span class="btn_play"></span>&#160;&#160;&#160;&#160;&#160;<span><i>Figure 1.9. Both F1 and F2 forces produce similar effects because they have the same line of action and sense. The law of transmissibility allows us to adjust the point of application from inside the mouth to outside and achieve patient comfort.</i></span></p>
<p class="indent"><span>To help understand the implication of this law in the clinic, assume you need to apply a force at the center of a tooth. You design a hook that attaches to the bracket and extends to a point closer to the center of the tooth (<a href="#fig1.10">Figure 1.10</a>). </span></p>
<p class="img"><img style="max-width:100%;" src="/assets/images/fig10.png" alt="images" /></p>
<p class="caption" id="fig1.10"><span><i>Figure 1.10. A hook can be used to apply a force not to the bracket on the crown but close to the center of a tooth.</i></span></p>
<p class="indent"><span>After applying the force, you notice that the hook irritates the mucosa due to its excessive length causing discomfort to the patient. To solve this problem you could shorten the hook, but then your force will not pass through center of the tooth. To maintain the same effect you need to adjust the hook so that the force stays in the same line of action (<a href="#fig1.11">Figure 1.11</a>). </span></p>
<p class="img"><a id="play11" onclick="play11()"><img id="img11" style="max-width:100%;" src="/assets/images/fig11/ch1_fig11_0000.png"/></a></p>
<p class="caption" id="fig1.11"><span class="btn_play"></span>&#160;&#160;&#160;&#160;&#160;<span><i>Figure 1.11. The length and the angle of the hook can be changed to produce a force on the same line of action, without causing discomfort to the patient.</i></span></p>`
})
.state('home.adding-force-together',{
  url: '/adding-force-together',
  template: `<h2 class="level2"><a id="4"></a><span>Adding Forces Together</span></h2>
<p class="indent"><span>During orthodontics treatment, we often need to apply two or three forces to a tooth simultaneously. For example, we want to intrude and retract a central incisor. If we apply both intrusion and retraction forces the tooth should move in both directions. As a result, the tooth will change to a position that is the sum of both movements. If instead of using two forces you apply a single force that is equal to the sum of both forces&#8212;called resultant force&#8212;you will produced exactly the same movement (<a href="#fig1.12">Figure 1.12</a>).</span></p>
<p class="img"><a id="play12" onclick="play12()"><img id="img12" style="max-width:100%;" src="/assets/images/fig12/ch1_fig12_0000.png"/></a></p>
<p class="caption" id="fig1.12"><span class="btn_play"></span>&#160;&#160;&#160;&#160;&#160;<span><i>Figure 1.12. Simultaneous application of intrusion and retraction force to the same tooth produces the same result in tooth movement as using a single force equal to the resultant force.</i></span></p>
<h3 class="level3"><span>How to Calculate the Resultant Force</span></h3>
<p class="indent"><span>If all the forces applied to a tooth have the same line of action, the magnitude of resultant force is the sum of the magnitude of all forces. This is only true if they share the same sense (<a href="#fig1.13">Figure 1.13</a>). </span></p>
<p class="indent"><span>If the forces have the same line of action but opposite senses, the magnitude of resultant force is the difference in the magnitudes of all forces (<a href="#fig1.14">Figure 1.14</a>)</span></p>
<p class="img"><a id="play13" onclick="play13()"><img id="img13" style="max-width:100%;" src="/assets/images/fig13/ch1_fig13_0000.png"/></a></p>
<p class="caption" id="fig1.13"><span class="btn_play"></span>&#160;&#160;&#160;&#160;&#160;<span><i>Figure 1.13. The resultant force of different forces with the same line of action and the same sense equals the sum of those forces.</i></span></p>
<p class="img"><a id="play14" onclick="play14()"><img id="img14" style="max-width:100%;" src="/assets/images/fig14/ch1_fig14_0000.png"/></a></p>
<p class="caption" id="fig1.14"><span class="btn_play"></span>&#160;&#160;&#160;&#160;&#160;<span><i>Figure 1.14. The resultant force of different forces with the same line of action but opposite senses equals the difference between those forces.</i></span></p>
<p class="indent"><span>If the forces we apply to a tooth do not have the same lines of action, the sum of the forces is not simply the sum of their magnitudes. In these situations, the calculation of magnitude of the resultant force is more complex because we have to include the angle of the lines of action. Although for research purposes calculating the exact magnitude of the sum of all forces is necessary, in clinical practice the precise magnitude of the resultant force is not very important as long as we keep the magnitude of individual forces within the biological range. Because these calculations are impractical in daily clinical practices, this subject is not covered in this chapter.</span></p>
<p class="indent"><span>However, the direction of the resultant force is important because it will dictate the final position of the tooth. The easiest way to see the direction of the resultant force in a clinic application is to draw an imaginary parallelogram. </span></p>
<p class="indent"><span>If both forces have a common point of application, we just need to draw a parallelogram by drawing two lines parallel to our forces. The resultant force will be the diagonal of this parallelogram (<a href="#fig1.15">Figure 1.15</a>).</span></p>
<p class="img"><a id="play15" onclick="play15()"><img id="img15" style="max-width:100%;" src="/assets/images/fig15/ch1_fig15_0000.png"/></a></p>
<p class="caption" id="fig1.15"><span class="btn_play"></span>&#160;&#160;&#160;&#160;&#160;<span><i>Figure 1.15. The resultant force of two forces with a common point of application will bisect an imaginary parallelogram defined by lines parallel to these forces.</i></span></p>
<p class="indent"><span>What happens if the forces do not have the same point of application? We can determine the resultant force by moving one of the forces along its line of action until it crosses the line of action of the other force (based on the law of transmissibility). The intersection point resembles a common point of application from which we continue to construct the parallelogram (<a href="#fig1.16">Figure 1.16</a>).</span></p>
<p class="img"><a id="play16" onclick="play16()"><img id="img16" style="max-width:100%;" src="/assets/images/fig16/ch1_fig16_0000.png"/></a></p>
<p class="caption" id="fig1.16"><span class="btn_play"></span>&#160;&#160;&#160;&#160;&#160;<span><i>Figure 1.16. The law of transmissibility allows for the identification of the resultant force of two forces with different points of application.</i></span></p>`
})
.state('home.component-of-force', {
  url: '/component-of-force',
  template: `<div class="title">
    <h2 class="level2"><a id="5"></a><span>Components of Force</span></h2>
<p class="indent"><span>In orthodontics, we dissect all forces into a vertical and horizontal component. In other words, vertically we either intrude or extrude, and horizontally we either mesialize or distalize (sagittal view) or move the tooth palatally or buccally (occlusal view). Therefore, when we apply a force that is not purely vertical or horizontal, we need to know what vertical and horizontal effects it will have on the tooth. In other words, we need to resolve the force to its vertical and horizontal components (<a href="#fig1.17">Figure 1.17</a>).</span></p>
<p class="img"><img style="max-width:100%;" src="/assets/images/fig17.png" alt="images" /></p>
<p class="caption" id="fig1.17"><span><i>Figure 1.17. Vertical and horizontal components of a force.</i></span></p>
<h3 class="level3"><span>Resolving a Force into Components</span></h3>
<p class="indent"><span>To analyze the horizontal and vertical components of your forces, simply draw a parallelogram in your mind so that your force is the diagonal and its vertical and horizontal components are the sides of the parallelogram.</span></p>
<p class="indent"><span>Depending on the angle of your force, your vertical and horizontal components can be different, but will never exceed the magnitude of the force that you applied (<a href="#fig1.18">Figure 1.18</a>). </span></p>
<table style="width:100%; margin-bottom:0em">
<tr>
<td>
<p style="float:left;"><a id="play18a" onclick="play18a()"><img id="img18a" style="max-width:100%;" src="/assets/images/fig18_A/ch1_fig18_A0000.png"/></a></p>
</td>
<td>
<p style="float:right;"><a id="play18b" onclick="play18b()"><img id="img18b" style="max-width:100%;" src="/assets/images/fig18_B/ch1_fig18_B0000.png"/></a></p>
</td>
</tr>
</table>
<p class="caption" id="fig1.18"><span class="btn_play"></span>&#160;&#160;&#160;&#160;&#160;<span><i>Figure 1.18. Same forces with same point of application, if applied at different angles, produce different vertical and horizontal components.</i></span></p><br />
  </div>`
})
.state('home.moment-force',{
  url: '/moment-force',
  templateUrl: 'moment-force.html'
})
.state('home.characteristics', {
  url: '/characteristics',
  templateUrl: 'characteristics.html'
})
.state('home.review-question',{
  url: '/review-question',
  templateUrl: 'review-question.html'
})
.state('home.summary',{
  url: '/summary',
  templateUrl: 'summary.html'
})
.state('home.recommended-reading',{
  url: '/recommended-reading',
  templateUrl: 'recommended-reading.html'
})

}
