## DEMOs

This section is reserved for the complete end-to-end Stable Signer V3 pipeline, from input sign content through motion generation, personalized 4D SQ control, and the final identity-faithful 4K avatar video. The current component-level diagnostics are reported below as ablations rather than pipeline demos.

## Ablation Studies

### Ablation I: Face SQ Splatting

We compare the original facial template with the generalizable Face SQ layer across multiple primitive counts. The evaluation will isolate expression accuracy, temporal stability, rendering speed, and the marginal benefit of additional SQ capacity.


<div class="video-container">
  <video controls muted loop playsinline preload="metadata"><source src="static/videos/face_sq/k1024_diagnostic.mp4" type="video/mp4"></video>
</div>
<p class="video-caption"><strong>Experiment 1 · Where does Face SQ correct FLAME?</strong> This diagnostic fixes K=1,024 and exposes the geometry behind the rendered result. The top row contains restricted FLAME, its display-only 5× residual, the full-expression target, and true target error; the bottom row contains learned SQ ownership, its 5× residual, the same target, and SQ error under the identical millimetre scale. Comparing the two error maps shows whether the gain comes from meaningful local expression correction rather than appearance-only refinement.</p>

<div class="video-container">
  <video controls muted loop playsinline preload="metadata"><source src="static/videos/face_sq/primitive_count_ablation_k32_k1024.mp4" type="video/mp4"></video>
</div>
<p class="video-caption"><strong>Experiment 2 · How many Face SQ primitives are needed?</strong> Six budgets from K=32 to K=1,024 are evaluated on the same held-out facial-control sequence while motion, target geometry, data split, and renderer remain fixed. The comparison isolates capacity from all other factors: increasing K progressively gives the residual layer more freedom to follow expression-specific geometry, while the smaller settings reveal which facial motions cannot be represented by a coarse primitive set.</p>


### Ablation II: Test-Time Body SQ Splatting

We compare the unadapted body template with identity-specific body SQ splats learned at test time. The evaluation will measure geometric alignment, deformation accuracy, temporal stability, and adaptation cost on held-out motion.

<div class="video-container video-container-body-wide">
  <video controls muted loop playsinline preload="metadata"><source src="static/videos/body_sq/k512_appearance_oriented.mp4" type="video/mp4"></video>
</div>
<p class="video-caption"><strong>Experiment 3 · Can lightweight test-time SQ adaptation improve a new body?</strong> The top row is frozen GUAVA and the bottom row is the identity-specific K=512 Body SQ model, both evaluated on held-out motion. From left to right, the columns show the rendered avatar, learned SQ patches over the signer, the geometric carrier, the shared target, and RGB error. This appearance-oriented setting emphasizes RGB, gradient, and SSIM objectives, testing whether a compact virtual-muscle layer can improve the visible body fit without retraining the general avatar generator.</p>

<div class="video-container video-container-body-wide">
  <video controls muted loop playsinline preload="metadata"><source src="static/videos/body_sq/k1024_geometry_oriented.mp4" type="video/mp4"></video>
</div>
<p class="video-caption"><strong>Experiment 4 · What changes when Body SQ prioritizes geometry?</strong> With the same two-video calibration split, K=1,024 and stronger carrier, silhouette, and boundary supervision shift the objective from appearance toward deformation accuracy. The aligned 2×5 layout compares frozen GUAVA and the adapted model frame by frame, making it possible to inspect whether lower error is accompanied by a body surface that actually follows the signer rather than by a purely photometric shortcut.</p>

### Ablation III: Tunneling-Based Super-Resolution

We compare three test-time adaptation strategies under the same calibration data, synchronized frames, optimization budget, and frozen GUAVA renderer: TunnelingNet, conventional LoRA, and Adapter, all with rank r8. Both videos use the same 3-row × 4-column layout. Rows are the three methods; columns are the original native-1024 MiniMax RGB, the frozen 512 GUAVA baseline enlarged 2×, the method-specific native-1024 result, and synchronized before/after crops of the face, hair, hands, and sleeves. The two videos repeat this one ablation on two sequences rather than representing two different experiments.

<div class="video-container video-container-wide">
  <video controls muted loop playsinline preload="metadata"><source src="static/videos/detail_tunneling/sequence1_three_methods_r8.mp4" type="video/mp4"></video>
</div>
<p class="video-caption"><strong>Ablation III · Selected calibration sequence.</strong> Read each row horizontally to inspect one method from source and frozen baseline to its adapted output and local detail crops; read each column vertically to compare TunnelingNet, LoRA, and Adapter at the same instant. We use the cleaner Prompt 2 sequence here so the comparison is not confounded by the earlier clip's out-of-frame arm motion.</p>

<div class="video-container video-container-wide">
  <video controls muted loop playsinline preload="metadata"><source src="static/videos/detail_tunneling/sequence2_three_methods_r8.mp4" type="video/mp4"></video>
</div>
<p class="video-caption"><strong>Ablation III · Selected sequence (alternate playback).</strong> The identical three-method, four-column comparison is retained as the companion playback of the same clean Prompt 2 calibration sequence, keeping the layout, split, and budgets unchanged for direct visual inspection.</p>
