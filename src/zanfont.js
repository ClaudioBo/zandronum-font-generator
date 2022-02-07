const bigFontImg = new Image();
const smallFontImg = new Image();

//This is fucking horrible, but i cant open images if i am not using a web server, fuck cors
bigFontImg.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtsAAAAMCAYAAAHE00GAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc5MzREQTM5ODM0QTExRUNBNTQ2OUYzQzVCNEVDN0IyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc5MzREQTNBODM0QTExRUNBNTQ2OUYzQzVCNEVDN0IyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzkzNERBMzc4MzRBMTFFQ0E1NDY5RjNDNUI0RUM3QjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzkzNERBMzg4MzRBMTFFQ0E1NDY5RjNDNUI0RUM3QjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5gn935AAAblUlEQVR42nxSIQ6FMAztfjgMEolAIjgAAskRkEgEEoGcRHIEBAfiECT9vCZdChnUbO1rX9u3OWamqqqYLtu2zekddp6nnEmSkOIUsbIsGTlab3mUQ23fd4d8vVvsbQ5rsR4x/Cv+zPnqF+v5dlrdsJtilutnSS2QZRnVdR2wrutoGAYGyTRNrA0gnhWuaRoRLk3TwFkUxU3seZ7DQ1mxNX9dV87znMZxpL7vCVxPwwzIB3blS6xtW+HBrOYzCA/i4ML9OA6dXWaEjxrgy7KEPeBbUbVOfeihuPde6lCDPYHFHu8vAOF0dAMgCENRNO7DWHwyDgOxGXqNz5SmBRITMOaB5fSywiMJUUGikQnxwiPZ2R6Rnp3UTO+ui05aTyM7g/8f5otu6ei9L0VCIWsfyrrW+kpHCjdr86RMXVJK+fPUIY+KOcaYrbW5uzyyrEz7DXtb3chEKe9Zf7L/czK8Pl9oFYl9yeNhkMuc7lNOhlCdorxbAC7JFolCGAbC724VHALZA1QiOQCyorKSAyCQSASHQHKMvPmY2U6o2EmabP7742eDYRislGJIgG1ZFss5233fdp7nC/nkVyxymqbm3/f9k+s4jhbXI4RgMcbGV53ruppNecZxbO91XW3bNiMeH3HSAX7eAN88z69OL+gpJfNzaBa40gGzKB9c3xO7QSqX3wd10CWB35HXAT2JRx3e8sGlvmr28djEQVJTNyAXu1Qufxv1r/ug+z5qrR9eP5v42OAiVctz8IlHP/SpevB8f35nytnfCTzPY5L9/yL2LwDpZYusMAyF0dYhEAgEAsFSWA4LQLIAFsQiEAgEAskCEAgEri8n05O5lBYYXmc6TXOTm/vb72v+bA910jvCIuZ1Abjvk//NJbn5lph0YSESniESNESIPsFQ17ehT/Q3sl9gp+89Prv5+wRF/4XCTzkZgs5fiWGsuaHc9KFCgUkgKF673a6QJqFHMmahLBaLrpNZaYLOvCfBBEY07ziLhK4lTsU44EnDgT/HrI1wnNa+EEp0cQPB2KKctUA2Y6GaJ+uiDzFokrvWlwKXXEAl8IuM9THQ7XsDjArNUQ/yuI9bAq1/QjGEvCXHFZQinm+82Hs4HBqpgnlLeoucM6QO6uAsKYM2xdwgJ04dv2rzo23GRh+kSOyH2kSKgj5sV8/tdmsk5K0NJe7OM9Z3Y+VcpE69fzibzebJeHjgdrstCwnsZDLJh1nYl8ult3voMubG43G13+/LXAyqYwprvV6/dN90Oi1rcNbx/X6vlstlLKLKAu42aUp24Z2unc/npfjTbYByM3PG6XR6siP5mc9KZ2afZrNZbrb4J6g/2miCU9KK/17qiXGQD6PbuPUhyOPxyDkxseRA+Wg0yn6cz+csww85KDo5N345iVM7X2MjRUijmlOLlzOMU+TO8a8TvRQrNZJikwuW/OknNiNnjjXH47Gy+NPemndqAD0UK/FdrVaV+WaefGEzjcD79Xo1nuSk7kPMPwEos4OcyHYYCsON9JbCElgGg14AS2PIkAGL6GUwZB+8fFH+kt8FpNdXuqIqlTj2sX3shFtbMhWVNQJhbXDnKB1INl3A3o3j875LWZ8F0V2MAdiHh4dff/78kbU7yAQ3QAQXQyQIAz8+PvY+ZSEgDsN8vry8bGeR6QpAoJK15vxVy/M3rVE6vb29bbvYeBLqluxwuL+/34TAaYKR4wSnqwkyYGCswIOh8a4uBBN5/vo9Z9n79fV1y2YrvIzRg/2+e/r7/Py8qxGc6Pn09LTxsje9jMGdPx4fH2+t5LVF850sRDHbtmXHDqQIpasZ+2cfuyXICvy7WUk89EIAHTizMf3pzl4xIbkk8CQNyUb2xJk+sJDMYsF+fIJ8jZFxSOxW4SKMEiwSklhzP7Kts0Zim1vbxH908bLF3BmL9CffevqQUZLyCV8U30vW7iTEw2zb4ASz5skJuosnukTe4mO0nRtfxHIO8hs3csQWf7GTrsiJvEn65hTbkU/rxb0cnpiFE1utNYe9XfnxZ3Lf39/3vOLAXPqYQ4a9wj4sq/J0hA+byYl7Js/Qq1yabTh8xQNfTUy7DsRx+VHO1B3qAsSnOOLH2an9/v176zv9YT374GWcL+SR77MIVxiKYbGVzqcQ73xcefrjTRvdk/nPd5NmdQPWVD4hiLTzn0SZd5FVXw7nHM5EwssJmzBWAO8ARySXir2rZ6004zkoIlnOvt31ApuO5nGE78jJeg7Tvs/qv5y0q/6VmJLHnqnTIu6I7T+tPZlLr1tVlJzsPHvMJNztdQ6tUwjLqn+EO++ne6wTROwSEPDrN92cfdmioyLD3EMcG2f2wsbbHtk+CbtA0oGxN6yQTsmAQNg8jz7kKs4StO6rABOUBXVkjEwVPDiU+Hxlz/Vusj8J9uXq1l7sQ04VefqV5OQUixff7pgQ0zBQICRpcWq/bHJEkpz5nF38e45mNxJka/6/dtIVM3qYH2kbj2yN0be4mY91xk+x293/8u+2fRKmIjKPGsYnoYVTvpqEKAeQC2I0Fy4dtxDkJMF5vGO3NfYqfuX2aSz2/Olr4/abGPObtTCee4TbtIduzTld9D41iK9s1FjKE0Ts8/n/yWeNQfsuv3/C9DR+X04Gh7h3TpEr59aaWzH1OGW01u/2sw/7alqs8bixXxjvI39k25xzCvk18RiFcfv8SvrXk9+3HTcnnaPLj52twC9ZAVLn47OAReq6bKBSbB1PN8iMr8NWFevAf6oyyAw5dC8wyfH/XOYJnKv8OiPjV53mA/yOTefIeQNesFexfe54bSwMYCh4J+FNvQQvoujY5GUrUk2vnqt+8Pc7MjdX8MDaa27EZA6MEX/FwR78M7GJwM2fuq6E+Tyd4hcM/dWBzI4R+dalXrtQuPhMn4ir00gJarw7OL+xx9qKQEkd/te9I9R+Fzd82B7X+Lju19y69Ekw5Ofj/O5z+9ZBmi9G6u5bT7Y9ZpfvjZTr8MjJL62re2xfJFCueuvci61OJuaKw/T6zm/f5Qwf2S99I+5wST9kP08pNRvW0eHqpysuVxsVDpiE+9TLOFvsU/ddjBmvsUlezSeil79hdu7vvsgoTqdeM+40MwpG2JDfyatYvXKNvFKwuzWYp+DvYnKus+bg8mXOvwLQcrY5bsMwEIWLPd4eZe//N80T+IwJQztOujVQpE1siaIofgzHHR33VVrG1Ds967x0VkSW61PnJ7s6n3SFPoVLukwTCeFqE/5MZxMp4agbdXTfBPD37652ra4Gw6O1n3XAXnWAXo3/znyvumuvbPWde3/r9zPyyRGZ42qn8R0Z3u1SvqvP/6Xrf1nDJ/Z31mk8o82dzXuF2MQ9TzAJ2R8pvLicXTJL3yjT1+fPzw+Z9B6xiBBgV0QWShLxLaEIHTflgXiqVzZFyMQpOcTWijp2yyj921fKRAYL1EJmSnQlS6hIutZIBM2OY0EZT93L7BmI+1WUXdCReKUZGPcwN7oiunOhA+RIGIXSH11Sphb0s+ThWdaQZSfjdMfeAyhr5xn6FF1u4ZLEijs+mkaHHZgVIid7KWTBd8JGyG55b8PI6obMy2zXLN1ymvVkL4TxxZ6tMIQo/M1+QzSnlozoXbiG+cyYM8tyT8Uk/c3SNklm7CtZmA2skmeXz4zPLK0RvrRvyug9w2e9/t1OsiW382CP3ONZSXzacW269d6E47Fv+azVB99TbWWfIGEvK28hGvQnbGVvS2zbrJ3s1yzeaiAhGftJ6Imzlb4n15w+I23QakP92acreGntHTIVHAs0sSUrwLmFe7B3M2rGpbqxByIUiq1i0zzTz1cSDRkrm7qNSTD6NtYpXPN1hb6pAv03G8VmsFgWxEITY7SZpmB357R158g9iVuLo2d5wEZS7idXWKgEliYBgYWAa5sZE0Du8m2fOOyUiU1mM4RR2BSdi442O9EacI/oyusBEivTeSTbQYcKtsz9OvkJixcbwwBxhIzHXlhui4d7MDUWDaoHUMaotT/sPxi6FJTqXWzVAd+Dd67FfbL5yvrF/3JsdeY6OEAc+MRBxQqnrB0d1qFb8yW+nrJwaPnNuX0em0JX3TZ9zkOfLIpkGeSao3+yBwtkwzHd17jOCGvT0QrzTBc2z3P3+XcH4lw8g5NApzpaApQOmO+r+fgEHeks0a/QQSZfZ7h4sjX6xTPIlLrP8XuW63xCbkI2vafjmtk3bNlEKOVkXM5m4tPi/dgW+ioGyK3sfm+8KhN6JCkhsKLvglqesmB0YH9IyEcY0n8nro1dp+NOHbAeg1/qhM8jx41vlOr1p/+YziIny4FwlkyKcVQ3fVcwC8a4gTVwYpUd3Ho2i0NJZ9QFTUzXssMGDgszWPDJvHxHlYD8nROG8nCEbMxZht1lUgY/M4qrZBwGxoAc6XyTnaBzRW/cqxP1kLLB/KnsfQWIOijru+Qo9osMXIdsh5s1YGB852sKXOB+BKHiW246bJwE+2bgS10RNMWiM1v//v5eTBtshefVTVYZrl9j51DlqwfoQQcjBnoAWT1VL1MTC8fEnH4asNBLf57DmfMVrU3e6nK+/M5YU1acGWdQ6nanbWOOago5SSzy4ox0+ZWVZ2lC8pl0xJQX/eM0SJIch3snudKJmrFptzgcA+xRSc7+urfuH3phrMSokRlZxdpZo5RBx+yN2GzcZkBLCiZ/RzcEEM4ctphVDmOaSHGG2fsMsKyf84n+et+Gc8AzBp3O7IHhoVNFD5zHDL5d9mJ3bSSAJkaTbithWYGmgvFWQeYlPPQ1bXCPlNOlsDa3dKw4JjM9xuHTezkULFz2w1RCmFniTHjWyCNUYrMORyadpxp7O0VLrqPPTviSCugyTYpNGCSvzAYm7AqHrPFk9gLE4uHKAOmhZPOQRy7u9PaiRitNEGeNnDr+oO89vFeWeL3cVuQRQiHYsm826Mhk0HkFxy2I/etPz0iKhrZntBm4dGTKzr0ykHTy/ZDrLAx0Zlrq3WzLTHK6zB4tpWUCmdmkfDpn5kt2QJLXzcJzv7UR9xXbwJmYIRGEcQDSuxy/k+g9gzYYe7BhX8gMhRCwjdQrOrXyFUqQsphjF/zyQOkj2UlOuVUi59cXEfg9G5/VGBwdDfvZg11CVymP8IC6ZB51L+2R9aJX/iQbR/YOti8RIPdHmidzoyvsJRuRjI+e+C3tOSGuTMhSTmGg3nu4j8kLLDdfFMnenDbSE1VsI6uKo+trUrSd1DPIxOzKLNpywdKGQy59j0NvJ1Wn20v0Po8k9sLY1+FH8d5LBijuLl2wO5AyztvR9wSZlKnhi+tAmEVjXJY/Zh5if5badst1VBN7JHmx4ro67IIQNrFqD5UGe1SemqkXtLAHU9kjOHXGtUzsutFx80xmETIsenYi/76/bYWxZdbtodSpeOB0wtwrbSwNX6aGpSd/F59U/9npl5MrZp5wxZEjx3awc7My5pAeKBabNEK+z33vOCV6ZU/dV2VmX+RSlzO5ZUBLfDzHdR84U8rBpzIIU6mTznrAJhM7dk72sjjyI25qVSP7RHaE4/ZqCN3rhHTynbqa9oA86cizSS1DxOo5gyxBk+f8Lxb8TWw5WSr3qmb3SThoxhR2s5LqfoHnCwJ9CPY6euZzH2TMoAvuSbZRz7h94y/fWeCZCV5rUNshVfmvAMWd23LbOgxF89D//2WfrgxXZgcBKNpyejTTSepIIgmCuG7AP9AjnYsEoUjKWcUkARLLmNZV/ay+C1fRfhIyHtZg4lkzPipcKi8FIgyPdZ9CE6GiluwWrgJB6PAM9+bfd2tIi5UNRqmwYawJbQpDMR8Fy79CvfwWkqajk3E4BLqWhowvjzSZ8a8wk4IGHlg48W9hJD29zKNkvxStbt7HP/ggC090Z3lPWoVa9n4On6D0eF9VQBwqhZZ5DpWpRV8pwPPetNLqu1Vcmc+xwAs+gs8zAa2Vl/cyPkrcYqo6/l2k0CnyaEKp1Hs4Q2l01LPMeWHuKtnpvDieRVUaR+wpe+uzVW7oQRGuTY9PSOMyaloUSYZa2Jf0HPWm4SXOfhpada0qI7xTDYkJAWWNgUoqcyDsObKlwiZVmoTNXGcq+oQYdmsztCbOPeVsyjJltftWoYt1vx3bfVOx1zVMPFNpxr7qTXX5mwoOoGAyobfSiHVWunTzQO4wnmHEbs84c9B8wcfb+fBsx9vqP9bL8znfyhPwV8rbPD+dvrl79u6OzbrQj10INM+hqYYK435F98ujnMP6XI5n4Z18KY0IZ1dZkOsxL+y593nP/Y5PkndTD/p5FlhO/GgBYhY/QjveuVJDP866upP1W3iYuXnlhW0U6pjeryzVYPZs7ELdfibtUx5UWWLURBnEOOho6Gkw4ES/eSZ9j+uuMmmSPQLNXrHbdrbjn5MXsFEQwxBrhr1hznrVz1IppzCv4Z56b9YKWEWK0c/41jqcQJ3TUFnoKAvCPr3Famgz7nTorP6GCTjkAFbM/6VDwRgoMMOEp3DWHWz0XxntOzpFov7bwZW5bGkRLTlkuh+5t0RyVfSch9n3TPeKYsvQqgZt5nzT2M22HPAWB9kOBjuaaBBDi2x82F1Tfg/HTwcwnTbojKJNzxn+4T5Do35m14VchxGxTGtUh7P7rHNCuQch6L7vLlHCzCWRmDWKknzSRfnMze6imkbWMvKl8tFolAcm+mfeWqVhlDIbUxklMlozAX4yaoh8qsZezakj8DH2BCfVyBZh7YwCngh3I4q8Ow3T6X6RjyJcT9KYHXBqookOrRGy/Bw+yPz6dOW8asGzjoufq+DsfmAUSqM1kaHm+bv3dgY/czVIgGGRXV6QbeyZBqtFzWmkCioT8SpCNvlbOcWak6YZIIBejJfo2JSBng/b+GT0+JWz946xr85Doql1xGpqK3X/6ZXjToZm5TXX1jkFye/stTyWEV4MRZ7lXwIu84ym7ZSBJPhLQ/nKaFsZl48s/k50uBgt07BGdnlGmynnJWYEg3uBQR9mnvg/74I2rCuDEjw76eQKLE18TDpsVZZ0e5NBLgGn6Jkro7viwmy8UGVSpXeC+UjzdsHWE9D1am32jQ/+PGOE1UlWVO30GYpIo5p3wKxpZE+er+PxPH9fSOyvSCFKy42qnnlnRBgVsiUT98hYuzXlhrDpHAoVShraPm/0kXnDoClEXI/RSaNVKEBoUg3shPxfdQ2dQEankc5n6JQHSAbjfg58BUr+ffarGaDprIxCZ9RRwbNzMoyUm0KsitsSoCjkf2hI2xIsr9WD7dPo0hBwjzOqzd9MMWYaWV6ojltHX2kURexf7dQwXJm38/On7+U+jDEEFs9jLNtNhJQ6tMuOM1f1sp0TCr8a+XffOwexdhqFx5kLZ9IyL/4+RT0z4st44kA0hKqhnVEJy3mMiHRXjehlZCajW+yphkQKyorpuhK4Kjxlk91F6vrZPxVlNuLUaQg8yUeiujNQYSDAuWrMca/nrIuwSUuVuhCIkxrj7lJugY1ybtDS88tnGVzRkLxyXNwr222lPIDXdbCVj0bvlSFGpdLIrjiskzloGChfLAUz/czn7BlzNMVcIQzVqBcUmw1hlJfMi/OX/GTUlnfvmlBAD7NbqW+68xaYzs/31rP3W2N3WLKEqmQWMveH+4zeVttglxHL3qEJi6lnQprsDG3Hck87/efZ8xwnvEaeEwOYc7D7VGR3H0J7pKMt5mwU0ulHA305R+nUZZGq0c28GNN1ZK9VjezOzssqNs4gMtmzoD7PbN6CTz2qLJlsm9RTZtmXjdIa3R0f6NBWmWQkG3rLB4Lj+b9NlZ+JdE825JGxTRSNf3cuIocQ3UgiQlKGtaJBWEFNxWWEDIMbw4J32WyYaAKGao2KaUTYz5Srw/mdXhgYKqiuSuKLqH/nUg2mfIcHzNpuftptSyfE3xWG/yKS/SydaiVU9mHtIiBdukaBUj1RmXbCPJq2y1Z7k1cb7/s0dNM4nyKg9u2tlRLuZ47Bvdy3sHyPHd2kke/RaxdfmvMR05lldjmXjMRjeFt7vXOyprmZxuxaEU48XvcXoWzryfr3NHDhLeEO9MPYZXY0tDknGbWV/llMUSuMoA/PdhGtjGyvr1X6kjWmqHeRz+mSfpMxl32D8x74QWXPPaeR7eR9q4CuLh3K3foyFb8cp6+56VCzl13E0Qj+NNcTQ5e5OVbeb8krP4WxOF/7B2OYTVkWszq842R/NZBshSuswd7hYlSlZ2ewCXewKx36jfNmsGiSmblfV3PV6a9zsABL6NXkgFTj62psscusZxpbeaesq5FQaeFemxGddH+nU5gDz3YZscpLO8cu17vLDHkGKg9ne1LWi6NsZaUymX3uIqW25+Xi3EhvsyLwj32tNdqrzhMuYktVIYbye6XttO9ZhMIZF27RBR6Fz+QXQJg5mqBylY4pS66u2qqYZ9CdJ5FudFOVSfKXMlOHRL3afQHbHXTBkbFtqsHiiCtmnIhEn1v7DWf/ZiJ6bDKK18Xmt7h5GDTU7Ydt+l3m04hiM0z1a5QvJvyGkZ3S6bt16F1ZSLSqNh8KMb0k5pWMlA4AhkimrnbGRiqzimcT3+QB3mFru/uv6LQzGFfKUAjB50HneY3GTmlVw1jFqTCtsI9KV52T8i2DHydQG2hga9gUvLy3FohY3FMNTw4sc6yFaPap7vZz4KMfihLhDF/bxla+SaGuU1TX4BdFpEPc8Th8t+Mbetjzfr9ggn7PjD8ZztBU/CtjG7GnwGS3ftZqT/hpzzJSnF9mUM+Hitxq05ots0qVc5TGgFCEbGWbSjPvXb25Hzoz/PTvid1M5YkjgbK1NQTGFnxr1sjzn2fawjgUCDTiZxoCYs/TyPSLQiwW252BTFvL86tw6WEEkjGWsXrJx12Vpz18JmeFdVmElrKJeSgjWJtQxFW1/i1d755pFFSMMrRnDH5Po9t3ZCO61RPq4djp8GYU0X2gLchq++HZeWhoVgNIHjHyzZUtlplf7m9W9WYxno3X4J9sy2K9ijAivwQlszTpXE1VuROf7MY2I2lEvxvbvUrjtMt0se7UBZ3uz0i4je2MCFfHte6Be9PBCpMndNwZl7UqI3TmGJM12SCwixRrcDMfsy06gRMkQaParFhXk2FGpK5XG4EzZAZCPtY5VCYteM1jV6cgHIq5dBj9mvnxi4iEGxl8Sh2ePG6dRSdLapZsoleNdDsme4bMRF8lZlt5VmXSyTl4J3rgqEDydCJX19UXb05fgvkMXqYjSEeILp1+dz0Zub7z3ldpeXr/M3R6li+mNM7HL1/PrL/bqytH8eqwndCve3Zqh/7sPd0cOh4/LWo8dWDu7sHpHH6br07X+H/x6jvff2ccM3D5+zvbk18FH+7Im3fM8y4PXj1/hw9focO7+OTkS67ftQd3ZMjV+p+pqXqnzXT1pd/TPa/Kybv0esfedbLkFXpXvTgFh95hw94xtv8D0iqPwaQPBX8AAAAASUVORK5CYII=";
smallFontImg.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAasAAAAHCAYAAAHBv1LaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg5N0Y0RDg0ODY0OTExRUM4MUMxQTUwMkI2MjM1REU0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjg5N0Y0RDg1ODY0OTExRUM4MUMxQTUwMkI2MjM1REU0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODk3RjREODI4NjQ5MTFFQzgxQzFBNTAyQjYyMzVERTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODk3RjREODM4NjQ5MTFFQzgxQzFBNTAyQjYyMzVERTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4X11rCAAAJh0lEQVR42mL8//8/g4aGxn8GKLhx4wYjjA9iMyABbOqQaZgadDY+Gtl8ZH0MZAKYGQABxKiurk60p7A5Bp8FxKhFV4cvUIjxEAgABCCL3GogAGEgeAYRgAEMIAEFCMAABjCALy5DMqS5+9i03b628OG3OAwL5pxnrXXggD48trV2a7HWiL33GWPcfK319cV5pZTnp5Ser46InPNfnh1qUR+AI+d8eWN7iNFOrvd+AY9ufGZ4G9zvO3iXMLaHOrWyK2qN2tlFXdzh28aeiK8ApFPBCQQhDHSvMRuwBP+CdViA2IX4F7vzdgI5QpbNwxOCGrOZSXZy6dF6U8WbMvX6ZywsdZ6M6+kUWGN+inHCR/f6IwNgc07zB6SUdills18b/DFGV2t9EAgh0Ln3/tthiMc7zvjOe0/vrTXKd6vPjTE2zBIIdsRKv7wDA1hWfcyT68k5O9iteuKB+rlH8s6csRCLPIzN9a61CAf5JJ7uFXDBU/f2KwCr5XoDMQjD4I7GlMzFAuxy8kmf5FoQOOl+VC1JIA8aOw/wpzYbYyzbf875grKErWx1t1NrCypoeWDSz0kIRIaceDiLWCR3f9Lhy9fEiK3n5xCX8EZe6IFU1SMh3WNnn+ywlczzJBbOyJjQK46sqdunXn4cqgW3TllJa9CA06DLk/awg0LcP3tZ6y2916m19rKT3nOHplY18f8MXd6Rr3W+363TnsfpfvxfSzvuz2vCdz5fynIkqCbAik6q4aaiudvJczeN3k6Hu1yqoe3kZ1eD3VS8yrfK4WRT6U95/4Nafxk3VveMTKzQe39u61Ctb4fuXXy3NT71yUcAXqzYVmEYiIbfMwANJQPAEizAArAComMBxAw0DEABC1AiARIFSKGghAEYIOhFeujlckkcPv9bihLb8fn87s5+51xgVU2Oo3M6nRbyljIje/wmpNTheXW5WmjghMr2eFyIcT/RLSQw62w+IbzXW1Ndx63avL4R2H+VIYf484/yTC2TySQdBD6KhwHV6XQy/4FHk4OOx+PEcmLwVnJOcFd+LxaLRBW3vF/lk0NDFr7JZ1Vn6MW57NzkzpZDAxDkBd1uN+c0XD+5OOZCHe1a9zYAcHC8b7dbonWVzTWRr2tugTl1zbZAX2CtmHh2VPkstBXbiQUL7Yf+0+mUlMmlDfjGWOKDXAZ6WZxYh/3L+ilHi+pKfbge9BErHct8EG3wJbw1T1J8mS+qb0FHzRWpn669MKh4+jAhHg6HuQjEP8vl8p3oQcHH45Ee3xD+fD5zQNzv98pTyAsktCFx3O120Xw+T3VR+RoA0Od6vUaj0SjTzrnRruOxDnX04/H43ji4/mazmdGT9dlslqkXbUoowMYrkLHZbNJv6O3Jabfb7lgbBBZfawPW7bhWq5WzgQYn+tfrdaGt9vt9ZB3/crlEvV7PxYCXB8Ae+MKu2m/xI84MAs/uCIjz+Zy2HQ6HKI7j9BuYYJwXmCz9fr+BgKTP4N/VahVtt9vMf/A96MpLDMV3MBg0vAuh4LzK0j/v6K/Kq7zjsoxvV7X/htqUHet1crBP6V/oBft/51RFawnBI4TeWd2qcqqyK+Fv5MGhV99FPulh/BKgVLNZpTYKw/AeGBoYKxMTxVRRJpSRUgykFAMHIDMTJ7DLUUiGjkAxUc7DXAbmfNeq6+3ej7XZ9a3abftdf8/v/fy8BqfKBaLK3t7egCKLi4vNq/PvRFfR//LycngO8m1sbLTUDETG40Vo7uB8GQBJPz8/J6KN6Lm7u9siw9PT0+ju7m4I6zs7Ow05Hh8f27lVYaAPiDeLw/7PEGygRYSVxpWVlfY3KCrtjp6c4ZNzkBnyGI/HQzSTZxEz+TYV5Dk6ML1RH8giowgRgjn3YtzcaQQjI1FXlS4GiK4zkDKtra2181kjbaI+6erZ2dloc3OzRRaiCnu9Gznc398P8km5pC3Uer6OBPzcU2WKLrQLec+WO/RlpESHyIUzOAvaU+7shT9lh76Q7fz8/Ojg4GC0v7/f9vG82qo2jp+wptq59NeyK32n6o5xfHw8pLTcq67k1Xl+c3/KOu0avyRjkZ5cr66en58HeXEfdHB+7zz9OW0PuyVL0N6g7/DwcHR7e9uySM5EBmKDMr+6umrr8RFsreozs8m6Br06r9/Osl9cW11dbfaOH6lTxuvra/t+f3+fyET1wyp/eCOzSvmhS+SL7NmvzVuqJPbyDDlJG785zwqC+9CHv3u4YxYrTdqc9pT+AO2cybz79ZFaKejbyJe7lX++lsKuZsXhud5DiBPYanTsgYVrq0PN0O1u7wxRkOCXzKhYgZO56+vrH8Z/enraypB8v5nvMHkfqrNlqj0tI63vWFVKL5tAsZxpIPa5gUp5QQdBPoMZcs40HT5xZI2rlpGcu76+PjyrfFvuSf+0ss7Eoco511uu9eSTPSvpAlwIAgz4TMM8OTn54ryHh4fBTrgz5Y9e+fAs5e19tfL4TR/YVNqpchQ4KP+y58Jz55CfCQaD4Abt8CZ49fTMGp11eXmZ73Y+cwk43AfQ5VsFZM890Mk5Hx8fP0pjbCV9sAaqBPY6mO+V/X+V/9poHdDjPQa58/PzxhPldsqvDoIyPEI3pSrf/M42Aj7AILnhk0EjZZ5J3tLS0iDTbA9U3jJQqRN92P3gWd7JGRnotBNkk22NmiThBwZl7aG2UpAluk8bRrbykLrGBuHbYE6AZz+81/v9n4g84+LiYsKnxAn4qEmefmHSKQ3cpT3XhCt9z/aU8pZG9Wdhw7f4/FfQmpvFgKcdUoVf+1mzVCPcI3P/glVrRmfWqIEDzDTBM0M086iBrhe5DXK9sjSrxR6vaWhkLqzz/FTmzc3NsId7mddgMjtN3tKx4dEqILNp5KMB2p8TYCvf+U9AGexwqu3t7R/OW8E/s/Pfhs5sllsd0Aa14GFCw/1Jdy97TzlXAJjWiqittKOjo1ECCzTlHLrqJWEV7JFH6gL6qRSzjQOvACzOj/1mpWGGyhx7rSBqG8SqlPW1/2tW7B7oT91hF4A6lQayrUljVlbYJLY+TYZmyeoAgHx7e5tYB7haKXDey8vLl9m+a9nLc/dkNcD+bFH1AilBD3tAtnyobJJnniFTeLN365wBNgF1a2trgk/2e2/Klzl8hU8GM1/m8XthYWGoqhg1ufir7WZ1wkj8qAGrVqfQxL3gIfKHLuRU/T5x1aAldmYQserqdSNMOrEpbFveU7/5ziSDVr5fqTZU+vn244dEtffPmCZF3xWKkp+bTujVAAAAAElFTkSuQmCC";

const zandro_draw = (imgid, text, font) => {
    ZanFont(imgid, text, font);
}

const ZanFont = (imgid, text, font) => {
    let cached_gradient = [];
    let current_color_char = null;
    let width_index = 0;

    const createPNG = (imgid, text, font) => {
        let canvas = document.createElement("canvas");
        canvas.width = 15 * 36;
        canvas.height = 12;
        drawLetters(canvas.getContext("2d"), text, font);

        let canvas_output = new Image();
        canvas_output.src = canvas.toDataURL()
        canvas_output.onload = () => {
            let cropped_canvas = document.createElement("canvas")
            cropped_canvas.width = width_index;
            cropped_canvas.height = font == "bigfont" ? 15 : 7;
            cropped_canvas.getContext("2d").drawImage(canvas_output, 0, 0, canvas_output.width, canvas_output.height);
            document.getElementById(imgid).src = cropped_canvas.toDataURL();

            canvas = null;
            canvas_output = null;
            cropped_canvas = null;
        }
    }

    const drawLetters = (ctx, text, font) => {
        width_index = 0;
        text = text.toLowerCase();
        let color_char = "c";
        let character_length = 0
        for (var i = 0; i < text.length; i++) {
            if (character_length > 31) break;
            let letter = text.charAt(i)
            if (letter == "\\") {
                if (text.charAt(i + 1) == "c") {
                    let skip_index = 2;
                    if (text.charAt(i + 2) == "[") {
                        skip_index += 3;
                        color_char = text.charAt(i + 3) + text.charAt(i + 4)
                    } else {
                        color_char = text.charAt(i + 2)
                    }
                    i += skip_index;
                    continue;
                }
            }
            if (!font_coords[font][letter]) continue
            const { x1, x2 } = font_coords[font][letter];
            const letter_width = (x2 - x1);
            ctx.drawImage(font == "bigfont" ? bigFontImg : smallFontImg, x1, 0, letter_width, 15, width_index, 0, letter_width, 15);
            colorFont(ctx, color_char, width_index, letter_width);
            width_index += letter_width;
            character_length++
        }
    }

    const colorFont = (ctx, color, x, w) => {
        if (color != current_color_char) {
            cached_gradient = [];
            current_color_char = color;
            if (!(color in font_colors))
                current_color_char = "c"
            const gradients = font_colors[current_color_char]
            for (let i = 0; i < gradients.length; i++) {
                const color1 = gradients[i][0]
                const color2 = gradients[i][1]
                const step1 = gradients[i][2]
                const step2 = gradients[i][3]
                const steps = step2 - step1
                cached_gradient = [...cached_gradient, ...interpolateColors(color1, color2, steps)]
                //The last step doesnt end with 256? Fill with the last color
                if (i == gradients.length - 1) {
                    if (step2 != 256) {
                        const remaining = 256 - step2
                        const last_added_color = cached_gradient[cached_gradient.length - 1]
                        for (let j = 0; j < remaining; j++) {
                            cached_gradient.push(last_added_color);
                        }
                    }
                }
            }
        }

        let imgData = ctx.getImageData(x, 0, w, 15);
        for (let i = 0; i < imgData.data.length; i += 4) {
            let r = imgData.data[i];
            let g = imgData.data[i + 1];
            let b = imgData.data[i + 2];
            if (!!r) r = cached_gradient[r][0];
            if (!!g) g = cached_gradient[g][1];
            if (!!b) b = cached_gradient[b][2];
            imgData.data[i] = r;
            imgData.data[i + 1] = g
            imgData.data[i + 2] = b
        }
        ctx.putImageData(imgData, x, 0);
    }

    const hexToRGB = (hex) => {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return [
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16),
        ]
    }

    function interpolateColor(color1, color2, factor) {
        if (arguments.length < 3) {
            factor = 0.5;
        }
        var result = color1.slice();
        for (var i = 0; i < 3; i++) {
            result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
        }
        return result;
    };

    function interpolateColors(color1, color2, steps) {
        var stepFactor = 1 / (steps - 1),
            interpolatedColorArray = [];

        color1 = hexToRGB(color1)
        color1 = `${color1[0]},${color1[1]},${color1[2]}`
        color1 = color1.match(/\d+/g).map(Number);

        color2 = hexToRGB(color2)
        color2 = `${color2[0]},${color2[1]},${color2[2]}`
        color2 = color2.match(/\d+/g).map(Number);

        for (var i = 0; i < steps; i++) {
            interpolatedColorArray.push(interpolateColor(color1, color2, stepFactor * i));
        }

        return interpolatedColorArray;
    }

    createPNG(imgid, text, font)
}