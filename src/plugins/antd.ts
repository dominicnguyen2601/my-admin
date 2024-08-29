import { App } from 'vue';
import { Button, Form, Input } from 'ant-design-vue';

export default function setupAntDesign(app: App) {
  app.use(Button);
  app.use(Form);
  app.use(Input);
}
