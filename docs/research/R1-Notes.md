
# R1-Notes — Feature Branch Workflow & PRs

## What I Reviewed (Week 1)
- Feature Branch Workflow (branches, merging, PRs, conflicts)
- “Day in the life” developer workflow examples
- Our class branching model: **feature → dev → stage → main**

## Key Takeaways
- Feature branches are where I code; each new task/feature gets its own branch.
- Dev collects the newest features and may have conflicts.
- Stage is feature-complete work, tested before release.
- Main (or master) is locked, only fully approved code goes here.

## How I’ll Apply This in the Florida Springs App
- Create feature branches for tasks (e.g., `feature/repo-setup`, `feature/map-view`).
- Merge to **dev** early and fix conflicts there.
- Keep a standing PR from **dev → stage** each week.
- Only request approval to merge **stage → main** when required.

## Sources
- Course materials on Feature Branch Workflow
- Developer workflow articles/videos
