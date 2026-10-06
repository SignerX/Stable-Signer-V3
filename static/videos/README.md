# Video provenance

These files are curated copies of completed SignWSM experiments. Keeping them
with the project page makes the demos independent of local training folders.

- `face_sq/k1024_diagnostic.mp4`: selected K=1,024 Face SQ diagnostic.
- `face_sq/primitive_count_ablation_k32_k1024.mp4`: six-level capacity study.
- `body_sq/k1024_geometry_oriented.mp4`: geometry-oriented Body SQ result.
- `body_sq/k512_appearance_oriented.mp4`: appearance-oriented Body SQ result.
- `detail_tunneling/sequence1_three_methods_r8.mp4`: sequence 1 of
  the matched TunnelingNet-r8, LoRA-r8, and Adapter-r8 comparison.
- `detail_tunneling/sequence2_three_methods_r8.mp4`: sequence 2 of
  the same matched comparison. In both files, each method occupies one row and
  retains the same four columns: original native-1024 RGB, frozen GUAVA
  baseline, adapted native-1024 result, and synchronized before/after detail
  crops.
