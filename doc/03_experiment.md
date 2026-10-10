## DEMOs

The ten examples below follow the complete Stable Signer V3 pipeline. Each row uses a different signer and a different Gloss sequence drawn from the WLASL V2 pose dictionary. The SQ column overlays the generalizable Face SQ and identity-adapted Body SQ patches directly on the predicted SMPL-X carrier. Use the optional RGB-ground-truth control to reveal the exact WLASL source clips whose sparse poses condition each generated sequence.

<div class="pipeline-demo-scroll">
<div class="pipeline-demo-table">
  <div class="pipeline-demo-head">
    <div><button class="pipeline-gt-toggle" type="button" aria-pressed="false"><span>Show Source RGB GT</span></button><span class="pipeline-column-title">Reference Video</span></div><div><span class="pipeline-speed-badge" data-fps="198.7" data-jitter="2.4">198.7 FPS</span><span class="pipeline-column-title">Predicted Pose</span></div><div><span class="pipeline-speed-badge" data-fps="320.9" data-jitter="3.6">320.9 FPS</span><span class="pipeline-column-title">Predicted Pose with Face &amp; Body SQ Splatting</span></div><div><span class="pipeline-speed-badge" data-fps="52.0" data-jitter="1.1">52.0 FPS</span><span class="pipeline-column-title">Rendered Avatar (HD / Final Output)</span></div><div><span class="pipeline-speed-badge" data-fps="47.6" data-jitter="0.9">47.6 FPS</span><span class="pipeline-column-title">Refiner (2K / 4K / Ultimate Output)</span></div><div class="pipeline-gt-column"><span class="pipeline-column-kicker">GROUND TRUTH</span><span class="pipeline-column-title">Original WLASL RGB Composition</span></div>
  </div>
  <div class="pipeline-demo-row">
    <div class="pipeline-demo-videos"><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/01_man_1/reference.mp4"></video><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/01_man_1/pose.mp4?v=same-signer-white-v2-20261010"></video><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/01_man_1/pose_sq.mp4?v=same-signer-white-v2-20261010"></video><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/01_man_1/avatar_hd.mp4?v=same-signer-white-v2-20261010"></video><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/01_man_1/refiner_4k.mp4?v=same-signer-white-v2-20261010"></video><video class="pipeline-gt-column pipeline-gt-video" controls muted loop playsinline preload="none" data-src="static/videos/demos/01_man_1/wlasl_rgb_gt.mp4?v=same-signer-white-v2-20261010"></video></div>
    <div class="pipeline-input-box"><div><span>TEXT</span>Hello, I meet my friend today.</div><div><span>GLOSS</span>HELLO MEET FRIEND TODAY</div></div>
  </div>
  <div class="pipeline-demo-row">
    <div class="pipeline-demo-videos"><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/02_man_2/reference.mp4"></video><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/02_man_2/pose.mp4?v=same-signer-white-v2-20261010"></video><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/02_man_2/pose_sq.mp4?v=same-signer-white-v2-20261010"></video><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/02_man_2/avatar_hd.mp4?v=same-signer-white-v2-20261010"></video><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/02_man_2/refiner_4k.mp4?v=same-signer-white-v2-20261010"></video><video class="pipeline-gt-column pipeline-gt-video" controls muted loop playsinline preload="none" data-src="static/videos/demos/02_man_2/wlasl_rgb_gt.mp4?v=same-signer-white-v2-20261010"></video></div>
    <div class="pipeline-input-box"><div><span>TEXT</span>My mother is at home with the family.</div><div><span>GLOSS</span>MOTHER HOME FAMILY</div></div>
  </div>
  <div class="pipeline-demo-row">
    <div class="pipeline-demo-videos"><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/03_man_3/reference.mp4"></video><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/03_man_3/pose.mp4?v=same-signer-white-v2-20261010"></video><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/03_man_3/pose_sq.mp4?v=same-signer-white-v2-20261010"></video><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/03_man_3/avatar_hd.mp4?v=same-signer-white-v2-20261010"></video><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/03_man_3/refiner_4k.mp4?v=same-signer-white-v2-20261010"></video><video class="pipeline-gt-column pipeline-gt-video" controls muted loop playsinline preload="none" data-src="static/videos/demos/03_man_3/wlasl_rgb_gt.mp4?v=same-signer-white-v2-20261010"></video></div>
    <div class="pipeline-input-box"><div><span>TEXT</span>I am learning sign language.</div><div><span>GLOSS</span>LEARN SIGN LANGUAGE</div></div>
  </div>
  <div class="pipeline-demo-row">
    <div class="pipeline-demo-videos"><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/04_man_4/reference.mp4"></video><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/04_man_4/pose.mp4?v=same-signer-white-v2-20261010"></video><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/04_man_4/pose_sq.mp4?v=same-signer-white-v2-20261010"></video><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/04_man_4/avatar_hd.mp4?v=same-signer-white-v2-20261010"></video><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/04_man_4/refiner_4k.mp4?v=same-signer-white-v2-20261010"></video><video class="pipeline-gt-column pipeline-gt-video" controls muted loop playsinline preload="none" data-src="static/videos/demos/04_man_4/wlasl_rgb_gt.mp4?v=same-signer-white-v2-20261010"></video></div>
    <div class="pipeline-input-box"><div><span>TEXT</span>Please help my deaf friend.</div><div><span>GLOSS</span>PLEASE HELP DEAF FRIEND</div></div>
  </div>
  <div class="pipeline-demo-row">
    <div class="pipeline-demo-videos"><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/05_man_5/reference.mp4"></video><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/05_man_5/pose.mp4?v=same-signer-white-v2-20261010"></video><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/05_man_5/pose_sq.mp4?v=same-signer-white-v2-20261010"></video><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/05_man_5/avatar_hd.mp4?v=same-signer-white-v2-20261010"></video><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/05_man_5/refiner_4k.mp4?v=same-signer-white-v2-20261010"></video><video class="pipeline-gt-column pipeline-gt-video" controls muted loop playsinline preload="none" data-src="static/videos/demos/05_man_5/wlasl_rgb_gt.mp4?v=same-signer-white-v2-20261010"></video></div>
    <div class="pipeline-input-box"><div><span>TEXT</span>Tomorrow, I will see my teacher at school.</div><div><span>GLOSS</span>TOMORROW SCHOOL SEE TEACHER</div></div>
  </div>
  <div class="pipeline-demo-row">
    <div class="pipeline-demo-videos"><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/06_woman_1/reference.mp4"></video><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/06_woman_1/pose.mp4?v=same-signer-white-v2-20261010"></video><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/06_woman_1/pose_sq.mp4?v=same-signer-white-v2-20261010"></video><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/06_woman_1/avatar_hd.mp4?v=same-signer-white-v2-20261010"></video><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/06_woman_1/refiner_4k.mp4?v=same-signer-white-v2-20261010"></video><video class="pipeline-gt-column pipeline-gt-video" controls muted loop playsinline preload="none" data-src="static/videos/demos/06_woman_1/wlasl_rgb_gt.mp4?v=same-signer-white-v2-20261010"></video></div>
    <div class="pipeline-input-box"><div><span>TEXT</span>My brother wants food and water at home.</div><div><span>GLOSS</span>BROTHER WANT FOOD WATER HOME</div></div>
  </div>
  <div class="pipeline-demo-row">
    <div class="pipeline-demo-videos"><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/07_woman_2/reference.mp4"></video><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/07_woman_2/pose.mp4?v=same-signer-white-v2-20261010"></video><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/07_woman_2/pose_sq.mp4?v=same-signer-white-v2-20261010"></video><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/07_woman_2/avatar_hd.mp4?v=same-signer-white-v2-20261010"></video><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/07_woman_2/refiner_4k.mp4?v=same-signer-white-v2-20261010"></video><video class="pipeline-gt-column pipeline-gt-video" controls muted loop playsinline preload="none" data-src="static/videos/demos/07_woman_2/wlasl_rgb_gt.mp4?v=same-signer-white-v2-20261010"></video></div>
    <div class="pipeline-input-box"><div><span>TEXT</span>My sister loves to play.</div><div><span>GLOSS</span>SISTER LOVE PLAY</div></div>
  </div>
  <div class="pipeline-demo-row">
    <div class="pipeline-demo-videos"><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/08_woman_3/reference.mp4"></video><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/08_woman_3/pose.mp4?v=same-signer-white-v2-20261010"></video><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/08_woman_3/pose_sq.mp4?v=same-signer-white-v2-20261010"></video><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/08_woman_3/avatar_hd.mp4?v=same-signer-white-v2-20261010"></video><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/08_woman_3/refiner_4k.mp4?v=same-signer-white-v2-20261010"></video><video class="pipeline-gt-column pipeline-gt-video" controls muted loop playsinline preload="none" data-src="static/videos/demos/08_woman_3/wlasl_rgb_gt.mp4?v=same-signer-white-v2-20261010"></video></div>
    <div class="pipeline-input-box"><div><span>TEXT</span>I go to work by car.</div><div><span>GLOSS</span>GO WORK CAR</div></div>
  </div>
  <div class="pipeline-demo-row">
    <div class="pipeline-demo-videos"><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/09_woman_4/reference.mp4"></video><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/09_woman_4/pose.mp4?v=same-signer-white-v2-20261010"></video><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/09_woman_4/pose_sq.mp4?v=same-signer-white-v2-20261010"></video><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/09_woman_4/avatar_hd.mp4?v=same-signer-white-v2-20261010"></video><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/09_woman_4/refiner_4k.mp4?v=same-signer-white-v2-20261010"></video><video class="pipeline-gt-column pipeline-gt-video" controls muted loop playsinline preload="none" data-src="static/videos/demos/09_woman_4/wlasl_rgb_gt.mp4?v=same-signer-white-v2-20261010"></video></div>
    <div class="pipeline-input-box"><div><span>TEXT</span>The teacher uses a book and computer at school.</div><div><span>GLOSS</span>TEACHER BOOK COMPUTER SCHOOL</div></div>
  </div>
  <div class="pipeline-demo-row">
    <div class="pipeline-demo-videos"><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/10_woman_5/reference.mp4"></video><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/10_woman_5/pose.mp4?v=same-signer-white-v2-20261010"></video><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/10_woman_5/pose_sq.mp4?v=same-signer-white-v2-20261010"></video><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/10_woman_5/avatar_hd.mp4?v=same-signer-white-v2-20261010"></video><video autoplay controls muted loop playsinline preload="auto" src="static/videos/demos/10_woman_5/refiner_4k.mp4?v=same-signer-white-v2-20261010"></video><video class="pipeline-gt-column pipeline-gt-video" controls muted loop playsinline preload="none" data-src="static/videos/demos/10_woman_5/wlasl_rgb_gt.mp4?v=same-signer-white-v2-20261010"></video></div>
    <div class="pipeline-input-box"><div><span>TEXT</span>Good morning, my friend. I will see you today.</div><div><span>GLOSS</span>GOOD MORNING FRIEND TODAY</div></div>
  </div>
</div>
</div>

## Ablation Studies

### Ablation I: Face SQ Splatting

We compare the original facial template with the generalizable Face SQ layer across multiple primitive counts. The evaluation will isolate expression accuracy, temporal stability, rendering speed, and the marginal benefit of additional SQ capacity.


<div class="video-container">
  <video autoplay controls muted loop playsinline preload="auto"><source src="static/videos/face_sq/k1024_diagnostic.mp4" type="video/mp4"></video>
</div>
<p class="video-caption"><strong>Experiment 1 · Where does Face SQ correct FLAME?</strong> This diagnostic fixes K=1,024 and exposes the geometry behind the rendered result. The top row contains restricted FLAME, its display-only 5× residual, the full-expression target, and true target error; the bottom row contains learned SQ ownership, its 5× residual, the same target, and SQ error under the identical millimetre scale. Comparing the two error maps shows whether the gain comes from meaningful local expression correction rather than appearance-only refinement.</p>

<div class="video-container">
  <video autoplay controls muted loop playsinline preload="auto"><source src="static/videos/face_sq/primitive_count_ablation_k32_k1024.mp4" type="video/mp4"></video>
</div>
<p class="video-caption"><strong>Experiment 2 · How many Face SQ primitives are needed?</strong> Six budgets from K=32 to K=1,024 are evaluated on the same held-out facial-control sequence while motion, target geometry, data split, and renderer remain fixed. The comparison isolates capacity from all other factors: increasing K progressively gives the residual layer more freedom to follow expression-specific geometry, while the smaller settings reveal which facial motions cannot be represented by a coarse primitive set.</p>


### Ablation II: Test-Time Body SQ Splatting

We compare the unadapted body template with identity-specific body SQ splats learned at test time. The evaluation will measure geometric alignment, deformation accuracy, temporal stability, and adaptation cost on held-out motion.

<div class="video-container video-container-body-wide">
  <video autoplay controls muted loop playsinline preload="auto"><source src="static/videos/body_sq/k512_appearance_oriented.mp4" type="video/mp4"></video>
</div>
<p class="video-caption"><strong>Experiment 3 · Can lightweight test-time SQ adaptation improve a new body?</strong> The top row is frozen GUAVA and the bottom row is the identity-specific K=512 Body SQ model, both evaluated on held-out motion. From left to right, the columns show the rendered avatar, learned SQ patches over the signer, the geometric carrier, the shared target, and RGB error. This appearance-oriented setting emphasizes RGB, gradient, and SSIM objectives, testing whether a compact virtual-muscle layer can improve the visible body fit without retraining the general avatar generator.</p>

<div class="video-container video-container-body-wide">
  <video autoplay controls muted loop playsinline preload="auto"><source src="static/videos/body_sq/k1024_geometry_oriented.mp4" type="video/mp4"></video>
</div>
<p class="video-caption"><strong>Experiment 4 · What changes when Body SQ prioritizes geometry?</strong> With the same two-video calibration split, K=1,024 and stronger carrier, silhouette, and boundary supervision shift the objective from appearance toward deformation accuracy. The aligned 2×5 layout compares frozen GUAVA and the adapted model frame by frame, making it possible to inspect whether lower error is accompanied by a body surface that actually follows the signer rather than by a purely photometric shortcut.</p>

### Ablation III: Tunneling-Based Super-Resolution

We compare three test-time adaptation strategies under the same calibration data, synchronized frames, optimization budget, and frozen GUAVA renderer: TunnelingNet, conventional LoRA, and Adapter, all with rank r8. Both videos use the same 3-row × 4-column layout. Rows are the three methods; columns are the original native-1024 MiniMax RGB, the frozen 512 GUAVA baseline enlarged 2×, the method-specific native-1024 result, and synchronized before/after crops of the face, hair, hands, and sleeves. The two videos repeat this one ablation on two sequences rather than representing two different experiments.

<div class="video-container video-container-wide">
  <video autoplay controls muted loop playsinline preload="auto"><source src="static/videos/detail_tunneling/sequence1_three_methods_r8.mp4" type="video/mp4"></video>
</div>
<p class="video-caption"><strong>Ablation III · Selected calibration sequence.</strong> Read each row horizontally to inspect one method from source and frozen baseline to its adapted output and local detail crops; read each column vertically to compare TunnelingNet, LoRA, and Adapter at the same instant. We use the cleaner Prompt 2 sequence here so the comparison is not confounded by the earlier clip's out-of-frame arm motion.</p>

<div class="video-container video-container-wide">
  <video autoplay controls muted loop playsinline preload="auto"><source src="static/videos/detail_tunneling/sequence2_three_methods_r8.mp4" type="video/mp4"></video>
</div>
<p class="video-caption"><strong>Ablation III · Selected sequence (alternate playback).</strong> The identical three-method, four-column comparison is retained as the companion playback of the same clean Prompt 2 calibration sequence, keeping the layout, split, and budgets unchanged for direct visual inspection.</p>
