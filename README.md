# Table of Contents

- [UI Design](#ui-design)
- [Common Errors](#common-errors)

# Requirement

- Simple, clean and to the point
- Value quality, not quantity
- Easy to navigate

# UI Design

### [Figma Link](https://www.figma.com/file/gYlKNEUYPwoc35QmSBlGLf/My-Portfolio-Web-Design?node-id=0%3A1&t=xcp8NEJ7zc4bEVLv-1)

# Data

- Project
  - name
  - link to repository
  - link to production
  - picture
  - description
- Work Experience
  - job title
  - company
  - description
  - tech stack
- Technology Skills
  - name
  - icon
- Contact
  - phone number
  - email
  - address
  - social network (Linkedin, Github)

# Common Errors

<details>
    <summary>node version is not matching</summary>

```
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@pkgr/utils@2.3.1',
npm WARN EBADENGINE   required: { node: '^12.20.0 || ^14.18.0 || >=16.0.0' },
npm WARN EBADENGINE   current: { node: 'v14.17.4', npm: '9.6.1' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'eslint-import-resolver-typescript@3.5.5',
npm WARN EBADENGINE   required: { node: '^14.18.0 || >=16.0.0' },
npm WARN EBADENGINE   current: { node: 'v14.17.4', npm: '9.6.1' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'next@13.3.1',
npm WARN EBADENGINE   required: { node: '>=14.18.0' },
npm WARN EBADENGINE   current: { node: 'v14.17.4', npm: '9.6.1' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'synckit@0.8.5',
npm WARN EBADENGINE   required: { node: '^14.18.0 || >=16.0.0' },
npm WARN EBADENGINE   current: { node: 'v14.17.4', npm: '9.6.1' }
npm WARN EBADENGINE }
```

### Install n package via npm

```
npm install -g n
n latest
```

</details>
