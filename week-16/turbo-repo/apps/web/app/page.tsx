import styles from "./page.module.css";
import { Button } from "@repo/ui/button";

export default function page(): JSX.Element{
  return(
    <div>
      <Button appName="Web app">
        Hi There
      </Button>
    </div>
  );
}