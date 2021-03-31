module.exports = {
    apps: [{
    name: 'Blog',
    script: './src/index.ts',
    instances: 2,
    exec_mode: "cluster"
    }]
}