import Model from 'models/Model';

interface ICategory {
  name: string;
}

export default Model<ICategory>({
  path: 'categories',
}, {
  name: '',
});
