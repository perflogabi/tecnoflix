import replace from '@rollup/plugin-replace';

export default {
  

  plugins: [
    replace({
      
      preventAssignment: true,
    }),
    
  ],
};
