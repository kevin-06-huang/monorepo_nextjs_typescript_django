/** @type {import('next').NextConfig} */
const nextConfig = {}
const withTM = require('next-transpile-modules')(['../common/components'])

module.exports = withTM(nextConfig)
