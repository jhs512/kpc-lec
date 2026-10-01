# 요약

아나콘다의 역할을 이해하고 uv로 Jupyter Notebook 실행 환경을 구성하며, 변수·리스트·딕셔너리와 조건문·반복문을 사용하며 pandas DataFrame의 행·열 구조를 설명합니다.



## 수업 위치

1일차 · 3시간 · 파이썬 개발 환경과 기본 문법 이해.

## 학습 목표

아나콘다의 역할을 이해하고 uv로 Jupyter Notebook 실행 환경을 구성하며, 변수·리스트·딕셔너리와 조건문·반복문을 사용하며 pandas DataFrame의 행·열 구조를 설명합니다.

## 단원 목차

다음 순서로 학습합니다.

1. 아나콘다 설치 및 Jupyter Notebook 실행 환경 구성
2. 파이썬 기본 문법 정리: 변수, 리스트, 딕셔너리
3. 조건문, 반복문 기초 이해
4. pandas DataFrame 기본 구조 맛보기

이 단원은 위 네 항목을 순서대로 진행합니다. 전체 교육 시간은 **3시간**입니다. 아래 가격·종목명은 가상 데이터입니다.

## 1. 아나콘다 설치 및 Jupyter Notebook 실행 환경 구성

### 아나콘다와 uv로 Notebook 환경 준비하기

아나콘다는 Python과 분석 도구를 묶어 제공하는 배포판이고 conda는 환경·패키지를 관리합니다. [1교시](surl:14892)에서 운영체제에 맞는 설치 방법, conda 환경 생성·활성화, 전용 Kernel을 선택한 Notebook 첫 실행을 확인합니다. 이후 기본 실습은 **uv → Python → 프로젝트 환경 → Jupyter Notebook**으로 진행합니다.

이 수업에서 필요한 것은 Python, 분석 패키지, Notebook 실행 환경입니다. uv는 Python을 준비하고 폴더별 `.venv`와 의존성을 관리할 수 있어 이 구성에 아나콘다를 추가로 설치할 필요가 없습니다. uv 자체가 Python이나 Notebook을 대신하는 언어는 아닙니다. [uv의 Python 관리](https://docs.astral.sh/uv/guides/install-python/)

| 도구 | 이번 수업에서 맡는 일 |
| --- | --- |
| uv | Python 준비, 프로젝트 환경·패키지 관리, 환경에 맞는 명령 실행 |
| Python | 계산·조건문·반복문 실행 |
| `.venv` | 이 수업의 패키지를 다른 프로젝트와 분리 |
| Jupyter Notebook | 설명·코드·출력을 셀로 묶어 작성 |
| Kernel | 선택한 Python으로 코드 셀 실행, 변수 상태 유지 |

### Anaconda 설치와 첫 실행

기존 설치가 있으면 재설치하지 않습니다. Windows는 **Anaconda Prompt**, Mac은 **Terminal**에서 `conda --version`을 확인합니다. Windows 신규 설치는 [공식 Windows 안내](https://www.anaconda.com/docs/getting-started/anaconda/install/windows-gui-install)를 따릅니다.

Mac은 Apple 메뉴의 ‘이 Mac에 관하여’에서 칩을 확인합니다. **Apple Silicon**은 [공식 Mac 안내](https://www.anaconda.com/docs/getting-started/anaconda/install/mac-gui-install)의 64-Bit (Apple silicon) Graphical Installer `.pkg`를 사용합니다. 현재 지원 대상은 macOS 12.1 이상이며 기본 설치 위치는 `/opt/anaconda3`입니다. 설치 파일을 열어 옵션·약관을 확인하고 완료 후 Terminal에서 `conda list`를 실행합니다. **Intel Mac**은 2025년 8월 15일부터 신규 패키지·설치 파일 제공이 종료되었습니다. 기존 환경은 사용할 수 있고 기존 `MacOSX-x86_64` 설치 파일은 [archive](https://repo.anaconda.com/archive/)에 남아 있습니다. 최신 Apple Silicon 설치 파일을 Intel Mac에 설치하지 않습니다. 기존 환경이 없으면 시연으로 conda 흐름을 확인한 뒤 uv 실습을 진행합니다. [지원 요건](https://www.anaconda.com/docs/getting-started/anaconda/system-requirements), [Intel 지원 안내](https://www.anaconda.com/blog/intel-mac-package-support-deprecation)

Mac에서 `conda`를 찾지 못하면 실제 설치 경로를 확인합니다. GUI 기본 설치는 `/opt/anaconda3/bin/conda init zsh`, Terminal 기본 설치는 `~/anaconda3/bin/conda init zsh`를 실행하고 Terminal을 다시 엽니다. bash 사용자는 마지막 `zsh`를 `bash`로 바꿉니다. [Mac Terminal 설치](https://www.anaconda.com/docs/getting-started/anaconda/install/mac-cli-install), [conda init](https://docs.conda.io/projects/conda/en/stable/commands/init.html)

환경이 없으면 아래 명령으로 별도 환경을 만들고 활성화합니다. Windows Anaconda Prompt와 Mac Terminal에서 공통으로 사용합니다.

```text
conda create --name kpc-finance-conda python=3.12 pandas notebook ipykernel openpyxl
conda activate kpc-finance-conda
python -m ipykernel install --user --name kpc-finance-conda --display-name "Python (kpc-finance-conda)"
```

데이터를 다운로드하지 않고 빈 수업 폴더에서 `jupyter notebook`을 실행합니다. Windows Anaconda Prompt에서는 `mkdir C:\kpc-finance`, `cd /d "C:\kpc-finance"`, Mac Terminal에서는 `mkdir -p ~/kpc-finance`, `cd ~/kpc-finance`를 순서대로 입력합니다. 이미 폴더가 있으면 `mkdir`는 생략합니다. 새 Notebook에서 **Python (kpc-finance-conda)**를 선택하고 `print("수업 준비 완료")`, `print(1 + 2)`를 실행합니다. 저장한 뒤 Kernel을 재시작하고 같은 결과를 확인합니다. 단계별 화면 조작과 실행 파일 확인은 [1교시](surl:14892)를 따릅니다. Anaconda 서버를 종료하고 `conda deactivate`한 뒤 아래 uv 절차로 전환합니다. 새 Mac Terminal이 `(base)`로 시작하면 다시 `conda deactivate`합니다.

### Windows에서 uv 준비

**PowerShell**을 열고 다음 명령을 실행합니다. 이미 uv가 있으면 설치는 생략하고 버전 확인부터 합니다.

```powershell
winget install --id=astral-sh.uv -e
```

설치 후 PowerShell을 새로 열고 `uv --version`을 실행합니다. WinGet을 쓸 수 없으면 [uv 공식 설치 문서](https://docs.astral.sh/uv/getting-started/installation/)의 Windows 방법을 따릅니다.

### macOS에서 uv 준비

**Terminal(터미널)**을 열고 아래 명령을 입력합니다. macOS 기본 셸 zsh와 bash에서 모두 사용할 수 있습니다. 이미 uv가 있으면 설치는 생략합니다.

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

설치 후 Terminal을 다시 열고 `uv --version`을 확인합니다. [uv 공식 설치 문서](https://docs.astral.sh/uv/getting-started/installation/), [Apple Terminal 셸 안내](https://support.apple.com/guide/terminal/change-the-default-shell-trml113/mac)

### 빈 폴더에서 실습 환경 만들기

지금은 데이터 파일이나 실습 자료를 다운로드하지 않습니다. 영문 이름의 수업 폴더에서 환경을 준비합니다. 앞의 Anaconda 확인에서 폴더를 이미 만들었다면 `mkdir`는 생략합니다. PowerShell에서는 아래 명령을 한 줄씩 실행합니다. CMD에서 다른 드라이브의 폴더로 이동할 때는 `cd /d 폴더경로`를 사용합니다.

```powershell
mkdir C:\kpc-finance
cd C:\kpc-finance
uv init --bare --python 3.12
uv python pin 3.12
uv python install 3.12
uv add pandas notebook ipykernel openpyxl numpy matplotlib seaborn scikit-learn beautifulsoup4 selenium yfinance
uv run python -m ipykernel install --user --name kpc-finance-uv --display-name "Python (kpc-finance-uv)"
uv run jupyter notebook
```

macOS Terminal에서는 홈 폴더 아래 빈 폴더를 사용합니다. Windows의 `C:\`나 `cd /d`는 Mac 명령에 넣지 않습니다. 이미 폴더를 만들었다면 `mkdir`는 생략합니다.

```bash
mkdir -p ~/kpc-finance
cd ~/kpc-finance
uv init --bare --python 3.12
uv python pin 3.12
uv python install 3.12
uv add pandas notebook ipykernel openpyxl numpy matplotlib seaborn scikit-learn beautifulsoup4 selenium yfinance
uv run python -m ipykernel install --user --name kpc-finance-uv --display-name "Python (kpc-finance-uv)"
uv run jupyter notebook
```

`~`는 자신의 홈 폴더입니다. 두 OS 모두 같은 프로젝트 명령으로 Python과 패키지를 준비합니다. `uv run`에는 가상환경을 별도로 활성화할 필요가 없습니다. 별도 활성화가 필요한 경우만 Windows PowerShell에서 `.venv\Scripts\Activate.ps1`, Mac Terminal에서 `source .venv/bin/activate`를 사용합니다. [uv 환경 안내](https://docs.astral.sh/uv/pip/environments/)

`uv python pin 3.12`는 실행할 Python 계열을 지정합니다. `uv add`는 필요한 패키지와 잠금 파일을 함께 관리합니다. 위 명령은 현재 폴더에 `pyproject.toml`·`uv.lock`·`.python-version`과 `.venv`를 만듭니다. 준비 후 `uv run python --version`으로 수업용 Python 버전을 확인합니다. `.venv` 폴더를 다른 PC로 복사하는 대신 설정과 잠금 파일로 각 PC에서 환경을 만듭니다.

### Notebook 생성과 Kernel 확인

코드 복사·붙여넣기는 Windows **Ctrl+C / Ctrl+V**, Mac **Cmd+C / Cmd+V**입니다. 코드 셀 실행은 둘 다 **Shift+Enter**입니다. 터미널의 서버 중단은 복사와 구분하여 둘 다 **Control+C**를 사용합니다.


위 등록 명령으로 만든 **Python (kpc-finance-uv)** Kernel을 선택합니다. 다른 환경의 Python 3가 보이면 이름만 보고 선택하지 말고 이 Kernel로 바꿉니다. `sys.executable`이 맞지 않으면 프로젝트 폴더에서 등록 명령을 다시 실행한 뒤 Kernel 변경 메뉴에서 다시 선택합니다. [Kernel 등록](https://ipython.readthedocs.io/en/stable/install/kernel_install.html)

브라우저의 Notebook 화면에서 새 Notebook을 만들고 Python Kernel을 선택합니다. 이름을 `01-python-basics.ipynb`로 저장합니다. 첫 코드 셀을 **Shift+Enter**로 실행합니다. **Windows와 Mac 모두 Shift+Enter가 동일합니다.** [uv와 Jupyter 공식 안내](https://docs.astral.sh/uv/guides/integration/jupyter/)처럼 프로젝트 환경과 Kernel의 연결을 확인합니다.

```python
print("수업 준비 완료")
print(1 + 2)
```

출력은 `수업 준비 완료`와 `3`입니다. 다음 셀에서 Python의 위치와 패키지 버전을 확인합니다.

```python
import sys
from pathlib import Path
import pandas as pd

print("Python:", sys.version.split()[0])
print("실행 파일:", sys.executable)
print("pandas:", pd.__version__)
print("자료 폴더:", Path.cwd())
```

실행 파일이 Windows에서는 수업 폴더의 `.venv\Scripts\python.exe`, Mac에서는 `.venv/bin/python`인지 확인합니다. 이번 시간에는 새로 만든 실습 폴더에 Notebook을 저장합니다. 다른 Kernel이면 서버를 종료하고 수업 폴더에서 `uv run --locked jupyter notebook`으로 다시 엽니다. 패키지를 추가할 때도 서버를 멈추고 Windows PowerShell 또는 Mac Terminal에서 강사가 안내한 `uv add 패키지이름`을 실행한 뒤 다시 확인합니다.

저장은 Windows **Ctrl+S**, Mac **Cmd+S** 또는 저장 버튼을 사용합니다. 실행 중단은 **Kernel → Interrupt Kernel**, 재시작은 **Kernel → Restart Kernel**, 전체 재실행은 **Restart Kernel and Run All Cells** 메뉴를 사용합니다. 메뉴 이름은 버전·표시 언어에 따라 조금 다를 수 있습니다. [Jupyter 조작 안내](https://jupyterlab.readthedocs.io/en/stable/user/commands.html)

서버를 종료할 때는 실행 중인 PowerShell/Terminal에서 **Ctrl+C**를 누릅니다. Mac도 **Control+C**입니다. 종료 확인이 나오면 응답합니다. 브라우저 탭만 닫아서는 서버가 종료되지 않습니다. [Jupyter 실행 안내](https://docs.jupyter.org/en/latest/running.html)

Notebook의 변수는 **실행한 셀의 순서**에 따라 저장됩니다. 아래에서는 셀 A를 먼저 실행하고 셀 B를 실행합니다.

셀 A:

```python
base_price = 10000
```

셀 B:

```python
print(base_price + 500)
```

예상 출력은 `10500`입니다. Kernel을 재시작하면 변수 값이 지워지므로 A부터 다시 실행해야 합니다. 이 동작은 [Jupyter 코드 실행 설명](https://jupyter-notebook.readthedocs.io/en/stable/examples/Notebook/Running%20Code.html)에서 확인할 수 있습니다.

**직접 실습:** 출력 문구를 자신의 문구로 바꾸고 실행하세요. 파일을 저장한 뒤 Kernel을 재시작하고 셀을 위에서부터 실행하여 같은 결과가 나오는지 확인하세요.

## 2. 파이썬 기본 문법 정리: 변수, 리스트, 딕셔너리

### 변수 — 값에 이름 붙이기

`=`는 오른쪽 값을 왼쪽 이름에 저장합니다. 문자열은 따옴표로 감싸고, 가격·수량은 숫자로 적습니다. `#` 뒤의 문장은 설명용 주석입니다.

```python
stock_name = "연습종목"
price = 10000
quantity = 3
amount = price * quantity  # 가격 × 수량

print(stock_name)
print(amount)
```

예상 출력:

```text
연습종목
30000
```

`quantity`를 바꾼 뒤에는 `amount = price * quantity`도 다시 실행해야 새 금액이 계산됩니다. 변수와 기본 연산은 [Python 공식 입문 설명](https://docs.python.org/3/tutorial/introduction.html)을 참고하세요.

**직접 실습:** 가격은 유지하고 수량을 5로 바꾸세요. 금액을 다시 계산했을 때 `50000`이 나오는지 확인하세요.

### 리스트 — 순서가 있는 여러 값

세 날짜의 가격을 하나의 리스트로 저장합니다. `prices[0]`은 첫 값, `prices[-1]`은 마지막 값입니다. 인덱스는 0부터 시작합니다.

```python
prices = [10000, 10200, 10100]

print("첫 가격:", prices[0])
print("마지막 가격:", prices[-1])
print("개수:", len(prices))
print("평균:", sum(prices) / len(prices))
```

예상 출력:

```text
첫 가격: 10000
마지막 가격: 10100
개수: 3
평균: 10100.0
```

`len`은 값의 개수, `sum`은 합계를 구합니다. 여기서는 값이 있는 리스트를 사용합니다. 빈 리스트는 평균을 계산할 때 0으로 나누게 됩니다.

**직접 실습:** 리스트 마지막에 `10300`을 추가하고 개수와 평균을 다시 확인하세요. 개수는 `4`, 평균은 `10150.0`입니다.

### 딕셔너리 — 항목 이름과 값

한 종목의 이름·가격·수량처럼 서로 다른 항목을 이름으로 구분합니다. `holding["price"]`는 `price`라는 키에 저장된 값을 꺼냅니다.

```python
holding = {"name": "연습종목", "price": 10000, "quantity": 3}
holding["amount"] = holding["price"] * holding["quantity"]

print(holding["name"])
print(holding["amount"])
```

예상 출력:

```text
연습종목
30000
```

리스트는 위치로, 딕셔너리는 키로 값을 찾습니다. 구조 설명은 [Python 자료구조 공식 문서](https://docs.python.org/3/tutorial/datastructures.html)에 근거합니다.

**직접 실습:** 딕셔너리의 수량을 5로 바꾸고 `amount`를 다시 계산하세요. 수량을 바꿔도 기존 `amount`가 저절로 갱신되지는 않습니다.

## 3. 조건문, 반복문 기초 이해

### 조건문 — 조건에 따라 실행하기

현재 가격이 기준보다 큰지, 같은지, 작은지에 따라 다른 문장을 출력합니다. `==`는 두 값이 같은지 비교합니다. `if`, `elif`, `else` 다음에는 `:`를 쓰고, 안쪽 코드는 들여씁니다.

```python
price = 10200
base_price = 10000

if price > base_price:
    print("기준보다 높음")
elif price == base_price:
    print("기준과 같음")
else:
    print("기준보다 낮음")
```

예상 출력:

```text
기준보다 높음
```

**직접 실습:** `price`를 `10000`, `9900`으로 각각 바꿔 실행하세요. 같은 경우와 낮은 경우가 올바르게 출력되는지 확인하세요.

### 반복문 — 값을 하나씩 처리하기

`for price in prices`는 리스트의 값을 차례로 꺼내 `price`에 넣습니다. 들여쓴 코드를 값마다 실행합니다. 합계와 개수는 반복하기 전에 0으로 초기화합니다.

```python
prices = [10000, 10200, 9900, 10100]
base_price = 10000
total = 0
above_count = 0

for price in prices:
    total = total + price
    if price > base_price:
        above_count = above_count + 1

print("합계:", total)
print("평균:", total / len(prices))
print("기준보다 높은 값의 개수:", above_count)
```

예상 출력:

```text
합계: 40200
평균: 10050.0
기준보다 높은 값의 개수: 2
```

기준과 같은 `10000`은 `>` 조건에 들어가지 않습니다. `>=`로 바꾸면 같은 값도 포함합니다. 조건문과 반복문은 [Python 제어 흐름 공식 문서](https://docs.python.org/3/tutorial/controlflow.html)를 참고했습니다.

**직접 실습:** 조건을 `price >= base_price`로 바꿔 개수가 `3`이 되는지 확인하세요. 합계·평균도 함께 출력하여 계산한 대상이 무엇인지 설명하세요.

## 4. pandas DataFrame 기본 구조 맛보기

### 리스트와 딕셔너리를 표로 연결하기

앞에서 배운 딕셔너리 하나를 한 행으로, 딕셔너리 여러 개를 담은 리스트를 표 전체로 생각하면 DataFrame을 만들 수 있습니다. 한 행은 한 종목, 한 열은 이름·가격·수량입니다. DataFrame에는 행을 구분하는 인덱스도 있습니다. [pandas 공식 표 구조 설명](https://pandas.pydata.org/docs/getting_started/intro_tutorials/01_table_oriented.html)을 참고하세요.

```python
import pandas as pd

holdings = [
    {"name": "연습A", "price": 10000, "quantity": 3},
    {"name": "연습B", "price": 20000, "quantity": 2},
    {"name": "연습C", "price": 15000, "quantity": 4},
]
df = pd.DataFrame(holdings)

print("행과 열:", df.shape)
print("열 이름:", list(df.columns))
print("행 인덱스:", list(df.index))
```

예상 출력:

```text
행과 열: (3, 3)
열 이름: ['name', 'price', 'quantity']
행 인덱스: [0, 1, 2]
```

다음 셀의 마지막 줄에 `df`만 적으면 Notebook이 표를 표시합니다.

```python
df
```

표 내용:

| 인덱스 | name | price | quantity |
| --- | --- | --- | --- |
| 0 | 연습A | 10000 | 3 |
| 1 | 연습B | 20000 | 2 |
| 2 | 연습C | 15000 | 4 |

인덱스는 표의 행 이름이며, 위 `(3, 3)`에서 말하는 데이터 열 세 개에 포함되지 않습니다. 여기서는 표를 만들고 구조를 읽는 데 집중합니다. CSV·Excel 읽기와 행/열 선택은 다음 단원에서 다룹니다.

**직접 실습:** `holdings`에 `{"name": "연습D", "price": 8000, "quantity": 5}`를 추가하세요. `df = pd.DataFrame(holdings)`부터 다시 실행하여 `df.shape`이 `(4, 3)`인지 확인하고, 한 행·한 열이 각각 무엇을 의미하는지 설명하세요.

## 마무리 실습 — 한 종목을 계산하고 표로 정리하기

새 코드 셀에서 직접 작성합니다. 아래 문제는 이 단원에서 배운 네 항목을 연결하는 수업용 실습입니다.

1. 이름이 `연습E`, 가격이 `12000`, 수량이 `4`인 딕셔너리 `holding`을 만드세요.
2. 가격 × 수량을 `amount` 키에 저장하세요.
3. 금액이 `50000` 이상이면 `50000 이상`, 아니면 `50000 미만`을 출력하세요.
4. 리스트 `[holding]`으로 DataFrame을 만들고 행·열 개수를 출력하세요.

확인할 결과: 금액은 `48000`, 조건 결과는 `50000 미만`, 표 크기는 `(1, 4)`입니다.

<details>
<summary>확인용 코드 — 직접 작성한 뒤 펼치기</summary>

```python
import pandas as pd

holding = {"name": "연습E", "price": 12000, "quantity": 4}
holding["amount"] = holding["price"] * holding["quantity"]

print("금액:", holding["amount"])
if holding["amount"] >= 50000:
    print("50000 이상")
else:
    print("50000 미만")

df = pd.DataFrame([holding])
print("행과 열:", df.shape)
```

예상 출력:

```text
금액: 48000
50000 미만
행과 열: (1, 4)
```

</details>

## 실행 중 막힐 때

| 상황 | 확인할 내용 |
| --- | --- |
| `NameError` | 변수를 만드는 셀을 먼저 실행했는지 확인합니다. Kernel 재시작 후에는 위에서부터 다시 실행합니다. |
| `ModuleNotFoundError: pandas` | 수업 폴더에서 `uv run --locked jupyter notebook`으로 실행했고 Kernel의 `sys.executable`이 `.venv`를 가리키는지 확인합니다. |
| `IndentationError` | `if`, `for` 안쪽 코드의 들여쓰기를 확인합니다. |
| `KeyError` | 딕셔너리 키의 철자와 따옴표를 확인합니다. |
| 값을 바꿨는데 결과가 같음 | 입력값 셀과 계산 셀을 모두 다시 실행합니다. |

## 단원 확인

- [ ] uv가 관리하는 수업 환경에서 Notebook을 열고 셀을 실행했습니다.
- [ ] 변수·리스트·딕셔너리를 만들고 값을 꺼냈습니다.
- [ ] 조건문과 반복문으로 가격을 비교하고 합계·개수를 계산했습니다.
- [ ] DataFrame의 행·열·인덱스를 구분했습니다.
- [ ] Notebook을 저장하고 위에서부터 다시 실행하여 결과를 확인했습니다.

다음 단원에서는 이 표 구조를 바탕으로 CSV·Excel 파일을 읽고, 필요한 행과 열을 선택하며 데이터를 수집·정리합니다.
