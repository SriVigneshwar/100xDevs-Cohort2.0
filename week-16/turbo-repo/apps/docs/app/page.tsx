import styles from "./page.module.css";
import { Button } from "@repo/ui/button";

export default function page(): JSX.Element{
  return(
    <div>
      <Button appName="Docs app">
        Hi There from Docs
      </Button>
    </div>
  );
}