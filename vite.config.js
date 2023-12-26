import { fileURLToPath, URL } from 'node:url'
import viteCompression from 'vite-plugin-compression'
import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  return {
    base: env.VITE_USER_BASE_URL, // 开发或生产环境服务的公共基础路径
    plugins: [
      vue(),
      vueJsx(),
      viteCompression({
        verbose: true, //是否在控制台输出压缩结果
        disable: false, //是否禁用,相当于开关在这里
        threshold: 1, //体积大于threshold 才会被压缩
        algorithm: 'gzip' //压缩算法,可选 [ 'gzip' , 'brotliCompress' ,'deflate' , 'deflateRaw']
        // ext: ".gz", //文件后缀
      }),
      splitVendorChunkPlugin()
    ],
    resolve: {
      extensions: ['.vue', '.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@a': fileURLToPath(new URL('./src/assets', import.meta.url)),
        '@c': fileURLToPath(new URL('./src/components', import.meta.url)),
        '@r': fileURLToPath(new URL('./src/router', import.meta.url)),
        '@s': fileURLToPath(new URL('./src/stores', import.meta.url)),
        '@v': fileURLToPath(new URL('./src/views', import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        // less: {
        //   javascriptEnabled: true,
        //   additionalData: `@import '@/assets/style/var.less';`
        // }
      }
    },
    server: {
      host: true // 监听所有地址
    },
    optimizeDeps: {
      // force: true // 强制进行依赖预构建，可能会打包缓慢，如果没有更改过node_modules中的插件源码，无需开启
    },
    build: {
      outDir: 'dist', // 打包文件的输出目录
      // 图片转 base64 编码的阈值。为防止过多的 http 请求，Vite 会将小于此阈值的图片转为 base64 格式，可根据实际需求进行调整。
      assetsInlineLimit: 4096, // 图片转 base64 编码的阈值
      assetsDir: 'static', // 静态资源的存放目录
      emptyOutDir: true, // 打包前先清空原有打包文件
      reportCompressedSize: false, // 关闭文件计算
      sourcemap: false, // 关闭生成map文件 可以达到缩小打包体积，这个生产环境一定要关闭，不然打包的产物会很大
      minify: 'terser',
      terserOptions: {
        compress: {
          booleans_as_integers: true,
          drop_console: env.VITE_USER_NODE_ENV == 'pro'
        }
      },
      chunkSizeWarningLimit: 1024, // 区块大小警告的限制（以kB为单位）
      rollupOptions: {
        output: {
          chunkFileNames: 'js/[name]-[hash].js', // 分类输出
          entryFileNames: 'js/[name]-[hash].js',
          assetFileNames: '[ext]/[name]-[hash].[ext]',
          manualChunks: (id) => {
            // 将 node_modules 中的代码单独打包成一个 JS 文件
            if (id.includes('node_modules')) {
              if (id.includes('ant-design-vue')) return 'ant-design-vue'
              if (id.includes('pinia')) return 'pinia'
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
            }
          }
        }
      }
    }
  }
})
