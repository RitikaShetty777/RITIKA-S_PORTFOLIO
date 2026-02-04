# PROCESS FLOW

## 1. Architecture

### Folder Structure Choice

The project follows a modular and scalable React folder structure:

- `components/` – reusable UI components
- `sections/` – major page sections (Hero, Tech Stack, Projects, etc.)
- `styles/` – global and section-specific CSS
- `assets/` – images and static resources
- `utils/` – helper logic (if required)

This separation improves:
- Maintainability
- Scalability
- Clear ownership of UI vs logic
- Easier debugging and updates

The structure aligns with industry-standard React SPA practices.

---

## 2. AI Usage

### Tools Used
- ChatGPT / Gemini (for UI refinement and debugging)

### Example Prompts Used

**Prompt 1 – Mobile UI Fix**
You are a Senior Frontend Engineer specializing in responsive UI.
Fix a React project section so that on mobile only one project card
is visible at a time, centered, with swipe support.
Do not change JSX structure or desktop behavior.


**Prompt Engineering Strategy**
- Clearly defined role
- Explicit constraints (no JSX changes, mobile-only)
- Precise output expectations
- Iterative refinement based on visual feedback

AI was used as a productivity and debugging assistant, not as a code generator.

---

## 3. Challenges Faced

### Bug: Project Cards Clipping on Mobile

**Problem**
On mobile devices, the project grid collapsed to a very small height,
causing cards to appear cut or partially visible.

**Cause**
The grid container relied on absolute positioning for desktop 3D layout.
When mobile styles disabled transforms, the container height collapsed.

**Solution**
- Disabled 3D transforms on mobile
- Switched to flexbox layout
- Added `min-height` to project cards
- Enabled horizontal scroll / snap behavior

This ensured full card visibility while preserving desktop behavior.
