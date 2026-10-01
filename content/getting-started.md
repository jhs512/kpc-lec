# 요약

첫 시간에는 빈 폴더에서 Python과 Jupyter 실행 환경을 만듭니다. 데이터 자료는 Titanic을 시작하는 1일차 7교시에 받습니다.

## 첫 시간 준비

[1교시: Jupyter 실습 환경 준비](surl:14892)의 Anaconda 기본 사용과 uv 설치·첫 셀 실행 순서를 따릅니다. Windows는 PowerShell, Mac은 Terminal(zsh/bash)을 사용합니다. 첫 폴더는 Windows `C:\kpc-finance`, Mac `~/kpc-finance`입니다. 데이터 파일은 아직 필요하지 않습니다.

uv로 Python·패키지를 준비하고 `uv run jupyter notebook`으로 엽니다. 이후 잠금 파일을 유지하며 `uv run --locked jupyter notebook`으로 같은 환경을 사용합니다. 분석 코드는 Notebook 코드 셀에, 설치 명령은 터미널에 입력합니다.

## 환경 폴더와 데이터 폴더를 구분합니다

첫 시간에 작성한 Notebook은 그대로 보관합니다. 7교시에 받는 자료는 별도 폴더에 풀어 첫 파일을 덮어쓰지 않습니다. 두 폴더의 Kernel도 이름으로 구분합니다.

![환경 폴더에서 데이터 실습으로 진행하는 순서](https://mermaid.ink/img/pako:eNpN0M1Kw0AQwPFXGfZsDnpQ6EGwTUXxAw85aT2syYaG5kNKqodSUehBbEtTNNhiKhELPXgJbSoK-kLZyTu4xla9_387s1MnqqMxkgOim865WqZVFxS5ZANsHJXIcjLzsBXkgL9fQ-VUlXTDprbKIO3GvHNXIscgSeuQF2ntDNJBP5l8JtMPwMkL7DsuO3GcCvBxm9-OkrdI5N8P5zNTEGblYnUxAMdXGPZ-2hDSXoCDS9hS9nbnqJAhWaC13506EQ7jtBnB4fYB8Ojhb4Sc1UVR82mTd5v_d5c06tL5B_DeA_R9fPUh9WMMg7kvZn5TeHz0-HN7kQ_7sMOqNjP5UwCK4VLbUAFbI7yZCUmWgFisalFDEwetE7fMrOy0GtNpzXRJo_EFNkKh5g)

## Jupyter 조작과 Kernel 확인

| 작업 | Windows | Mac |
| --- | --- | --- |
| 현재 셀 실행·다음 셀로 이동 | Shift+Enter | Shift+Enter |
| 저장 | Ctrl+S | Cmd+S |
| 선택한 텍스트 복사 | Ctrl+C | Cmd+C |
| 붙여넣기 | Ctrl+V | Cmd+V |
| 셀 실행 중단 | Kernel → Interrupt Kernel | Kernel → Interrupt Kernel |
| Kernel 재시작 | Kernel → Restart Kernel | Kernel → Restart Kernel |
| 터미널의 서버 종료 | Ctrl+C | Control+C |

저장 단축키가 브라우저 기능과 충돌하면 File의 Save 메뉴나 저장 버튼을 사용합니다. 재시작 후에는 앞 셀부터 다시 실행합니다. 브라우저 탭을 닫아도 서버가 종료되지 않습니다. **Mac Terminal에서 서버를 멈출 때는 Cmd+C가 아니라 Control+C**를 누릅니다. 메뉴 이름은 버전·언어에 따라 조금 다를 수 있습니다. [Jupyter 실행 안내](https://docs.jupyter.org/en/latest/running.html) · [공통 명령·단축키](https://jupyterlab.readthedocs.io/en/stable/user/commands.html)

첫 코드 셀의 `sys.executable`로 현재 Kernel을 확인합니다. uv 프로젝트의 Python은 Windows `.venv\Scripts\python.exe`, Mac `.venv/bin/python`입니다. `uv run`을 쓰면 별도 활성화가 필요 없습니다. 수동 활성화가 필요한 경우 Windows PowerShell은 `.venv\Scripts\Activate.ps1`, Mac zsh/bash는 `source .venv/bin/activate`를 사용합니다. [uv 환경 안내](https://docs.astral.sh/uv/pip/environments/)

## VS Code를 선택한 경우

Python·Jupyter 확장 기능을 설치하고 사용 중인 프로젝트 폴더를 엽니다. Notebook 오른쪽 위 **Select Kernel → Python Environments**에서 해당 폴더의 `.venv`를 선택합니다. 목록에 없으면 실제 Python 경로를 지정합니다. Windows는 `.venv\Scripts\python.exe`, Mac은 `.venv/bin/python`입니다.

Command Palette는 Windows Ctrl+Shift+P, Mac Cmd+Shift+P이며 `Python: Select Interpreter`에서 편집용 인터프리터도 확인합니다. Notebook Kernel 선택은 별도로 확인하고 첫 셀의 `sys.executable`을 비교합니다. [VS Code Kernel 선택](https://code.visualstudio.com/docs/datascience/jupyter-kernel-management) · [Python 환경 선택](https://code.visualstudio.com/docs/python/environments)

## 수업에서 사용할 도구

- 기본 분석: NumPy, pandas, openpyxl
- 시각화: Matplotlib, Seaborn
- 머신러닝: scikit-learn
- 웹 수집: BeautifulSoup, Selenium
- 주가 수집: yfinance 또는 FinanceDataReader

## Titanic 실습부터: 자료 다운로드와 압축 해제

1일차 7교시부터 외부 데이터가 필요합니다. 첫 환경 준비 시간에는 다운로드하지 않습니다. [수업 자료 ZIP](https://github.com/jhs512/kpc-finance-course/releases/latest/download/kpc-finance.zip)을 받고, Windows는 파일 탐색기 **모두 압축 풀기**, Mac은 Finder에서 ZIP을 더블클릭합니다. ZIP 안에서 직접 Notebook을 실행하지 않습니다.

압축을 풀어 나온 `kpc-finance` 폴더를 **Windows는 `C:\kpc-finance-data`, Mac은 홈 폴더의 `~/kpc-finance-data`**로 옮기고 이름을 바꿉니다. 첫 시간에 만든 `kpc-finance` 폴더와 별도로 보관하며 기존 파일을 덮어쓰지 않습니다. 실제 사용한 이름이 다르면 아래 경로도 바꿉니다.

폴더를 열었을 때 `pyproject.toml`, `uv.lock`, `.python-version`, `raw`, `practice`가 바로 보여야 합니다. 폴더가 한 번 더 중첩되어 있다면 안쪽 폴더를 사용합니다. `raw`와 `practice` 내부의 이름과 배치를 유지합니다.

**Windows PowerShell**

```powershell
cd C:\kpc-finance-data
uv sync --locked
uv run python -m ipykernel install --user --name kpc-finance-data --display-name "Python (kpc-finance-data)"
uv run --locked jupyter notebook
```

**Mac Terminal (zsh 또는 bash)**

```bash
cd ~/kpc-finance-data
uv sync --locked
uv run python -m ipykernel install --user --name kpc-finance-data --display-name "Python (kpc-finance-data)"
uv run --locked jupyter notebook
```

Windows CMD에서는 이동 명령만 `cd /d C:\kpc-finance-data`로 바꿉니다. 배포 폴더에는 설정이 있으므로 `uv init`과 `uv add`를 다시 실행하지 않습니다. 처음에는 Python·패키지 다운로드를 위한 인터넷 연결이 필요합니다. Jupyter에서 **practice → periods → d1-p07-08.ipynb**를 엽니다. Kernel 변경 메뉴에서 **Python (kpc-finance-data)**를 선택하고 `sys.executable`이 이 자료 폴더의 `.venv`인지 확인합니다. 기존 첫 환경·Anaconda Kernel과 이름으로 구분합니다. 이 Notebook의 준비 셀은 상위 폴더에서 `raw`를 찾아 작업 위치를 맞춥니다. 새 Notebook을 만든 경우 자료 폴더의 최상위 위치에 저장합니다.

ZIP에는 교시별 Notebook 12개와 Titanic·신용카드 부도·삼성전자 주가 데이터 3개가 있습니다. [자료 저장소](https://github.com/jhs512/kpc-finance-course)에서도 사용 안내를 확인할 수 있습니다. Mac 압축 해제 방법은 [Apple 안내](https://support.apple.com/guide/mac-help/zip-and-unzip-files-and-folders-on-mac-mchlp2528/mac)를 참고합니다.

## Windows와 Mac에서 파일 경로 확인

데이터 폴더는 Windows `C:\kpc-finance-data`, Mac `~/kpc-finance-data`를 예로 사용합니다. Notebook의 Python 코드에서는 `Path("raw/기존강사 수업자료") / "titanic.xlsx"`처럼 상대 경로를 사용하므로 두 OS에서 코드가 같습니다. `Path.cwd()`가 `raw` 폴더를 포함한 최상위 폴더인지 확인합니다. `practice/periods`의 배포 Notebook은 준비 셀에서 그 위치를 찾습니다.

파일명·확장자·대소문자를 자료와 정확히 맞춥니다. 파일시스템 설정에 따라 대소문자 처리 방식이 달라집니다. 공백이 있는 Terminal 경로는 따옴표로 감싸고, 홈 경로는 `cd ~/kpc-finance-data`처럼 입력합니다. Python의 `Path("~/kpc-finance-data")`에는 `.expanduser()`가 필요합니다. [Python 경로 안내](https://docs.python.org/3/library/pathlib.html)

CSV 인코딩은 OS가 아니라 파일 형식에 맞춥니다. 이 수업에서 저장하는 CSV는 `encoding="utf-8-sig"`를 사용하며, 기존 CSV 읽기는 해당 예제의 지정 인코딩을 따릅니다. 인코딩 오류를 `ignore`로 숨기지 않습니다. XLSX는 `read_excel`로 읽고 CSV 인코딩 옵션을 넣지 않습니다.

## 시작 전 확인

- [ ] 빈 폴더에서 Notebook을 만들고 첫 셀을 실행했습니다.
- [ ] 선택한 Python Kernel과 저장 위치를 확인했습니다.
- [ ] Windows와 Mac의 저장·서버 종료 키를 구분했습니다.
- [ ] Titanic 실습부터 자료를 받아 별도 데이터 폴더를 사용할 수 있습니다.

