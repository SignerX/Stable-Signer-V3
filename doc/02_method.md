## Method Overview

Stable Signer V3 upgrades a controllable 3D signer at three complementary levels: facial expression, identity-specific body deformation, and high-resolution appearance. The first component is shared across identities; the latter two adapt to each signer at test time without rebuilding the frozen generation backbone.

### Generalizable Face SQ Splatting

We augment the conventional parametric face with a shared layer of deformable superquadric splats. These primitives provide additional expressive degrees of freedom beyond the original facial template while remaining controllable by the underlying face motion. Once learned, the facial SQ layer generalizes across signers and does not require per-identity fitting.

### Test-Time Body SQ Splatting

For a new signer, a lightweight test-time procedure fits body SQ splats to the reference appearance and motion evidence. The resulting identity-specific virtual muscle layer corrects the mismatch between a generic body template and the actual avatar, allowing the same pose sequence to drive more faithful body deformation.

### Tunneling-Based Super-Resolution

A late tunneling path distills high-resolution identity evidence from the signer video into an independent spatial memory while preserving the frozen rendering path. This second test-time adaptation stage recovers identity-specific detail and supports stable high-resolution output without requiring reference frames during deployment.
