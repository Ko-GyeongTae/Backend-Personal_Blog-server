module.exports = {
    apps: [{
    name: 'Blog',
    script: 'yarn start',
    instances: 2,
    exec_mode: "cluster"
    }]
}