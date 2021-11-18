import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        // Viết một hàm tính tổng tất cả các số chẵn từ 1 đến 1000. Gợi ý: Bạn có thể dùng toán tử lấy số dư (%) trong bài tập này.
        int sum = 0;
        for (int i = 1; i <= 1000; i++) {
            if (i % 2 == 0) {
                sum += i;
            }
        }
        System.out.println(sum);
    
    }
}