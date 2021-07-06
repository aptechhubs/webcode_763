import javax.swing.JFrame;
import java.awt.*;

public class Gui extends JFrame{
	public Gui(){
		setTitle("This is coming gui");
		//setWidth(400);
		setSize(400,400);
		setLocation(200,200);
		Button btn = new Button("Click me");
		
		add(btn);
		setDefaultCloseOperation(1);
		
		setVisible(true);
	}
	public static void main(String[] args){
		new Gui();
	}
}